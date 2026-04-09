import { z } from "zod";

export const shippingSchema = z.object({
  details: z
    .string()
    .min(10, { message: "Address details must be at least 10 characters long" })
    .max(100, { message: "Address details cannot exceed 100 characters" }),

  phone: z.string().regex(/^01[0125][0-9]{8}$/, {
    message: "Please enter a valid Egyptian phone number (e.g., 01012345678)",
  }),

  city: z
    .string()
    .min(3, { message: "City name must be at least 3 characters long" })
    .max(20, { message: "City name is too long" }),
});

export type ShippingFormData = z.infer<typeof shippingSchema>;
