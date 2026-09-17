interface UserCardProps {
    username : string,
    image : string,
    firstname : string,
    phone : string,
}
export default function UserCard({ username, image, firstname, phone }: UserCardProps){
  return (
  <div className="card lg:card-side bg-base-100 shadow-sm">
    <figure>
      <img
        src={image}
        alt={username} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">@ {username}</h2>
      <p>{firstname}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">{phone}</button>
      </div>
    </div>
  </div>
  )
}