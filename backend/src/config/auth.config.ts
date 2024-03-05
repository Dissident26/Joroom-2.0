import * as session from 'express-session';
import * as connectMongoDBSession from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_CONNECTION_STRING!,
  databaseName: process.env.MONGODB_DB_NAME,
  collection: process.env.MONGODB_COLLECTION_NAME!,
  expires: 86400,
});

export const sessionConfig: session.SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: Number(process.env.SESSION_MAX_AGE),
  },
  store,
};
