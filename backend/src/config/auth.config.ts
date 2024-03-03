import * as session from 'express-session';
import * as connectMongoDBSession from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_CONNECTION_STRING!,
  collection: 'sessions',
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
