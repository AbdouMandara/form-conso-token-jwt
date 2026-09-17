import { useEffect, useState } from "react"
import userConnecte from "../api/userConnecte"
import { type User } from "../types/userConnecte"
import UserCard from "../components/UserCard"
export default  function Dashboard(){
    const [userFetched, setUserFetched] = useState<User|null>(null)
    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const user = await userConnecte(); //j'ai await car sinon ca devrait me retourner une promesse et je ne pourrais pas acceder aux données de l'utilisateur
                setUserFetched(user)
            } catch (error) {
                console.error("Erreur lors de la récupération de l'utilisateur :", error)
            }
        }
        fetchUser();
    }, [])
    const name = userFetched?.username || "Utilisateur inconnu"

    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">LoginAbdou</a>
            </div>
            <div className="navbar-end">
                <a className="btn">Deconnexion</a>
            </div>
        </div>

        <div>
            {userFetched ? (
                <div className="flex justify-center items-center mt-6 w-screen gap-4 flex-col">
                    <h1>Quelques infos de l'utilisateur connecté</h1>
                    <UserCard username={name} image={userFetched.image} firstname={userFetched.firstName} phone={userFetched.phone} />
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
        </>
    )
}