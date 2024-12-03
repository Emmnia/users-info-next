import { UserCard } from "@/components/UserCard/UserCard";
import { User } from "@/models/user";
import { Skeleton } from "@/components/ui/skeleton"

export default async function Home() {
  let users: User[] = [];
  let errorMessage: string | null = null;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    users = await response.json();
  } catch (error) {
    console.error('Error loading users:', error);
    errorMessage = 'Error loading users';
  }

  if (!users.length && !errorMessage) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {Array.isArray(users) && users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}
