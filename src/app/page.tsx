import { UserCard } from "@/components/UserCard/UserCard";
import { User } from "@/models/user";

export default async function Home() {
  let users: User[] = [];

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    users = await response.json();
  } catch (error) {
    console.error('Error loading users:', error);
  }

  return (
    <div className="flex flex-wrap gap-3 p-8">
      {Array.isArray(users) && users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}
