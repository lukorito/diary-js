import express from 'express';
import { Routes } from './routes';
import { NextFunction, Response, Request } from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import {
  authenticatedRoutes,
  nonAuthentiatedRoutes,
} from './middlewares/authMiddleware';

const app = express();

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
        route.isAuthenticated ? authenticatedRoutes : nonAuthentiatedRoutes,
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
            response.status(400).send(error);
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
