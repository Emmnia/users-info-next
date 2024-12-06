import { UserCard } from "@/components/UserCard/UserCard";
import { notFound } from "next/navigation";
import { getUsers } from "@/lib/getUsers";
import { User } from "@/models/user";

export default async function Home() {
  const users = await getUsers();
  console.log(users);


  if (!users) notFound();

  return (
    <div className="flex flex-wrap justify-center gap-3 py-20 px-8">
      {users.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}