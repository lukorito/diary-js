import * as bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) =>
  await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (error: Error, hash: string) => {
      if (error) {
        reject(error);
      }
      resolve(hash);
    });
  });

export const checkIfPasswordsMatch = async (
  newPassword: string,
  storedPassword: string,
) => {
  return await bcrypt.compare(newPassword, storedPassword);
};
