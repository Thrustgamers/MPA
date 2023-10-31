import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson'
import type { AppRouter } from '../../../server/src/index';

const server = createTRPCProxyClient<AppRouter>({
   transformer: superjson,
   links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

export default server