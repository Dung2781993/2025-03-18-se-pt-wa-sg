import axios from "axios";
import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
  website: z.string(),
  phone: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string()
  }),
});

export const UsersResponseSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const validated = UsersResponseSchema.parse(res.data); // Throw error if fields are not matching
  return validated;
};
