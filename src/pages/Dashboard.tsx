import { useEffect, useState } from "react"
import userConnecte from "../api/userConnecte"
import { type User } from "../types/userConnecte"
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
                <p>Bienvenue, {userFetched.firstName} {userFetched.lastName}!</p>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
        </>
    )
}