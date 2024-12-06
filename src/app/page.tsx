import { UsersContainer } from "@/components/UsersContainer/UsersContainer";
import { notFound } from "next/navigation";
import { getUsers } from "@/lib/getUsers";

export default async function Home() {
  const users = await getUsers();

  if (!users) notFound();

  return (
    <UsersContainer initialUsers={users} />
  );
}