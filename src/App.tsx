import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import UserSchema from "./schemas/dataForm.schema"
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      email: "a",
      password: ""
    }
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit(onSubmit)}>
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input {...register("email")} className="input" placeholder="Email" />
        <p className="text-error">{errors.email?.message}</p>

        <label className="label">Mot de passe</label>
        <input {...register("password")} className="input" placeholder="Password" />
        <p className="text-error">{errors.password?.message}</p>

        <button className="btn btn-neutral mt-4" type="submit">Se connecter</button>
      </form>
    </div>
  )
}

export default App