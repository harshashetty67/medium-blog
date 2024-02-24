import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify, decode } from 'hono/jwt';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
    JWT_SECRET: string;
	}
}>();

app.post('/api/v1/signup',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

  const body = await c.req.json();

  try{
    const user = await prisma.user.create({
      data:{
        email: body.email,
        password: body.password,
        name: body.name
      }
    });

    const token = await sign({id : user.id}, c.env.JWT_SECRET)
    return c.json({"User created" : token});
  }
  catch(err){
      return c.json({"msg" : err});
  }
});

app.get('/work',(c)=>{
  return c.text('Im working but sadly DB wont help');
})

app.post('/api/v1/signin', async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

  const body = await c.req.json();
  try{
    const user = await prisma.user.findUnique({
      where:{
        email: body.email,
        password: body.password
      }
    });

    if(user)
    {
      const token = await sign({id : user.id}, c.env.JWT_SECRET)
      return c.json({"token" : token});
    }
    else{
      return c.text("User does not exist..")
    }
  }
  catch(err){
      return c.json({"msg" : err});
  }
});

app.get('/api/v1/blog/:id',async (c)=>{
  const blogId = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

  try{
    const blog = await prisma.post.findUnique({
      where:{
        id: blogId
      }
    });

    if(blog)
    {
      return c.json({"Blog" : blog});
    }
    else{
      return c.text("Blog not found..")
    }
  }
  catch(err){
      return c.json({"msg" : err});
  }
})

app.post('/api/v1/blog',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

  const body = await c.req.json();

  try{
    const post = await prisma.post.create({
      data:{
        title: body.title,
        content : body.content,
        published : body.published,
        authorId : body.authorId
      }
    });

    return c.json({"msg" : post});
  }
  catch(err){
      return c.json({"msg" : err});
  }
});

app.put('/api/v1/blog/:id',async (c)=>{
  const blogId = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

  try{
      await prisma.post.update({where:{
        id : blogId
      },
    data:{

    }})
  }
  catch(err){
      return c.json({"msg" : err});
  }
})

export default app;
