import z from 'zod';

// For User SignUp
export const signupSchema = z.object({
name: z.string(),
email: z.string().email(),
password: z.string().min(6)
});

export type SignupType = z.infer<typeof signupSchema>;


// For User SignIn
export const signinSchema = z.object({
name: z.string(),
email: z.string().email(),
password: z.string().min(6)
});

export type SigninType = z.infer<typeof signinSchema>;


// For Blog create
export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
});

export type CreateBlogType = z.infer<typeof createBlogSchema>;


// For Blog update
export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

export type UpdateBlogType = z.infer<typeof updateBlogInput>;