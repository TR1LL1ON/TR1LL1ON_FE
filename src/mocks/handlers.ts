import { rest } from 'msw';
import { SERVER_URL } from '../constant';

export const handlers = [
  // 다른 핸들러들...

  rest.post(`${SERVER_URL}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'Login successful' }));
  }),
];
