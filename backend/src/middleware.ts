import { sign, verify, decode } from 'hono/jwt';

// Top-level middleware
export function initMiddleware(app:any) {
  // @ts-ignore
  app.use('/api/v1/blog/*', async (c, next) => {
  const token = c.req.header('Authorizarion')?.split(" ")[1] || "";
  const payload = await verify(token, c.env.JWT_SECRET)
  if(!payload){
    return c.json({msg:'Unauthorized'},403);
  }
  c.set("userId",payload.id);
  await next();
});
}