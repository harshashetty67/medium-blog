import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import {createBlogSchema, updateBlogInput} from "@harshashetty67/common-app/dist/index"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
      userId: string;
    }
}>();

// ---- Auth middleware ----
blogRouter.use('/*', async (c,next)=>{
  const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}

	const token = jwt.split(' ')[1];
  try{
    const payload = await verify(token, c.env.JWT_SECRET);
	  c.set('userId', payload.id);
	  await next();
  }
	catch (err) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
});

// API routes for blog
blogRouter.get('/all', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});
  return c.json({blogs: posts});
});


blogRouter.post('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	//Zod validation
	const {success} = createBlogSchema.safeParse(body);

	if(!success) {
		return c.json({error:"Bad inputs"},411);
	}

	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
});


blogRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	// Zod validation
	const {success} = updateBlogInput.safeParse(body);

	if(!success) {
		return c.json({error:"Bad inputs"},411);
	}

  // Check if blog exists
  const post = await prisma.post.findUnique({
    where:{
      id: body.id
    }
  });

  if(!post){
    return c.json({msg:`Blog with id: ${body.id} not found`});
  }

	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});


blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

  if(!post){
    return c.text("Blog not found.",404);
  }

	return c.json(post);
});