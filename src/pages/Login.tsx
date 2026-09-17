import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import UserSchema from "../schemas/dataForm.schema"
import userRequestToExterenalAPI from "../api/userRequest"
export default function Login(){
 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "sophiab",
      password: "sophiabpass"
    }
  })
  const onSubmit = async (data: any) => {
    try {
        await userRequestToExterenalAPI(data);
        window.location.replace("/dashboard");
    } catch (error) {
        window.location.replace("/invalid_credentials");
    }
  }
  const path = window.location.pathname;
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div>
            <p>Quelques identifiants de connexion</p>

        <div className="overflow-x-auto">
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th>1</th>
                <td>emilys</td>
                <td>emilyspass</td>
            </tr>

            <tr>
                <th>2</th>
                <td>michaelw</td>
                <td>michaelwpass</td>
            </tr>

            <tr>
                <th>3</th>
                <td>sophiab</td>
                <td>sophiabpass</td>
            </tr>

            <tr>
                <th>4</th>
                <td>jamesd</td>
                <td>jamesdpass</td>
            </tr>

            <tr>
                <th>5</th>
                <td>emmaj</td>
                <td>emmajpass</td>
            </tr>
            </tbody>
        </table>
        </div>
        

            
        </div>
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit(onSubmit)}>
        {path === "/invalid_credentials" &&
            <p className="bg-red-500 text-white p-2 rounded-xl m-2">Nom d'utilisateur ou mot de passe incorrect</p>
        }
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