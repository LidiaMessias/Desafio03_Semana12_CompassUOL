import * as z from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, "Enter at least 3 characters."),
    email: z.string().email("Invalid email address!"),
    subject: z.string().optional(),
    message: z.string().min(3, "Enter at least 3 characters."),
});

export type ContactSchema = z.infer<typeof contactSchema>