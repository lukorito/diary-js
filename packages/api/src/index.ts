import express from 'express';
import cors from 'cors';
import { Routes } from './routes';
import { NextFunction, Response, Request } from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import {
  passMiddleware,
  verifyAuthentication,
} from './middlewares/authMiddleware';
import { formatResponse } from './helpers';

const app = express();

// allow cors
app.use(cors());
// allow use of body parser
app.use(bodyParser.json());

const port = 3001;

createConnection().then(async connection => {
  // creates connection with the database
  try {
    // implement routing
    Routes.forEach(route => {
      (app as any)[route.method](
        route.path,
        route.isAuthenticated ? verifyAuthentication : passMiddleware,
        async (request: Request, response: Response, next: NextFunction) => {
          const controller = new route.controller() as any;
          try {
            const results = await controller[route.action](
              request,
              response,
              next,
            );
            if (results) {
              return response;
            }
          } catch (error) {
            if (error.name === 'QueryFailedError') {
              const message =
                'A problem has occurred, please contact the site administrator';
              formatResponse(response, 500, message);
            } else {
              console.log(error);
              formatResponse(response, 400, 'error', error);
            }
          }
        },
      );
    });
  } catch (e) {
    console.log('database connection failed', e);
  }
});

app.get('/', (req, res) => res.send('Hello World! Nice to see you'));

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
