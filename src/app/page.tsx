import { UserCard } from "@/components/UserCard/UserCard";
import { User } from "@/models/user";
import { notFound } from "next/navigation";
import { getUsers } from "@/lib/api";

export default async function Home() {
  const users: User[] = await getUsers();

  if (!users) notFound();

  return (
    <div className="flex flex-wrap justify-center gap-3 py-20 px-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}