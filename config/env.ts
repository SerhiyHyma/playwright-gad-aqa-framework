import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
  quiet: true,
});

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const config = {
  baseURL: process.env.BASE_URL || 'http://localhost:3000',

  user: {
    email: getRequiredEnv('TEST_USER_EMAIL'),
    password: getRequiredEnv('TEST_USER_PASSWORD'),
  },
};
