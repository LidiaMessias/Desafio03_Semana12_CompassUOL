import * as z from "zod";

export const subscribeSchema = z.object({
    email: z.string().email("Invalid email address!"),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>