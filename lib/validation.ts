import { z } from "zod";

export const UserFormValidation = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(
    (phone) =>
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone),
    {
      message: "Invalid phone number",
    }
  ),
});

export default UserFormValidation;
