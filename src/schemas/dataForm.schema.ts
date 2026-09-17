import * as z from 'zod'

const UserSchema =z.object({
    email: z.string({error : 'Entrez une nom valide'}),
    password: z.string().min(8, { message: "Le mot de passe doit avoir au moins 8 caractères" })
})
export default UserSchema;
export type User = z.infer<typeof UserSchema>;