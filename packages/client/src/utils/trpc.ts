import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../server/src/index';

const server = createTRPCProxyClient<AppRouter>({
   links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

export default server