import "dotenv/config";
import { cleanEnv, num, port, str, url } from "envalid";

const env = cleanEnv(process.env, {
  PORT: port(),
  CONNECTION_URI: url(),
  DB_HOST: str(),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  NODE_ENV: str({ choices: ["development", "production"] }),
  FRONTEND_URL: url(),
  ACCESS_TOKEN_SECRET: str(),
  ACCESS_TOKEN_EXPIRATION: str(),
  REFRESH_TOKEN_SECRET: str(),
  REFRESH_TOKEN_EXPIRATION: str(),
  COOKIE_EXPIRATION_DAYS: num(),
});

export default env;
