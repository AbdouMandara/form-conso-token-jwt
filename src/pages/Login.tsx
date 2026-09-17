import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import UserSchema from "../schemas/dataForm.schema"
import userRequestToExterenalAPI from "../api/userRequest"
export default function Login(){
 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })
  const onSubmit = (data: any) => {
    userRequestToExterenalAPI(data)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit(onSubmit)}>
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Nom d'utilisateur</label>
        <input {...register("username")} className="input" placeholder="Nom d'utilisateur" />
        <p className="text-error">{errors.username?.message}</p>

        <label className="label">Mot de passe</label>
        <input type="password" {...register("password")} className="input" placeholder="Password" />
        <p className="text-error">{errors.password?.message}</p>

        <button className="btn btn-neutral mt-4" type="submit">Se connecter</button>
      </form>
    </div>
  )
}