import {z} from "zod";

export const messageSchema = z.object({
    content: z
                .string()
                .min(10, {message: 'Content must be at least of 10 character'})
                .max(30, {message: 'Content must be no longer then 300 characters'})

})