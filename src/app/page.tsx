import { UserCard } from "@/components/UserCard/UserCard";
import { User } from "@/models/user";
import { notFound } from "next/navigation";
import { getUsers } from "@/lib/api";

export default async function Home() {
  const users: User[] = await getUsers();

  if (!users || users.length === 0) notFound();

  return (
    <div className="flex flex-wrap gap-3 p-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}