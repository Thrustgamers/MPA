import dbInit from '../db/init';
import express, { Express } from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter } from './Routing';

const app: Express = express();

app.use('/trpc', createExpressMiddleware({ router: appRouter }))

app.listen(5000, () => dbInit());

export type AppRouter = typeof appRouter;