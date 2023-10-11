import * as dotenv from 'dotenv';
import { cleanEnv, num, str, bool } from 'envalid';

dotenv.config();

export default cleanEnv(process.env, {
  PORT: num({
    desc: 'Default port wher parse-server will run on',
    default: 1337,
  }),
  DATABASE_URI: str({
    desc: 'URI to your MongoDB database',
    devDefault: 'mongodb://localhost:27017',
  }),
  AI_API_KEY: str({
    desc: 'URI to your MongoDB database',
    devDefault: 'mongodb://localhost:27017',
  }),
});
