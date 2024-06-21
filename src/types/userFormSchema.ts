import * as z from "zod";

export const userFormSchema = z.object({
    firstName: z.string().min(3, "Enter at least 3 characters."),
    lastName: z.string().min(3, "Enter at least 3 characters."),
    company: z.string().optional(),
    zipCode: z.string().length(8, "Zip code must be exactly 8 characters"),
    email: z.string().email("Invalid email address!"),
    infoadd: z.string().optional(),
    address: z.object({
        country: z.string().min(3, "Enter at least 3 characters."),
        street: z.string().min(3, "Street is required!"),
        town: z.string().min(3, "Town is required!"),
        province: z.string().min(2, "Province is required!"), 
        adAddress: z.string().optional(),     
    }).optional(),
});

export type FormSchema = z.infer<typeof userFormSchema>

