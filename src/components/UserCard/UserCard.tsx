'use client'

import { User } from "@/models/user";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/user/${user.id}`);
  }

  return (
    <Card className="w-[250px] animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{user.company.name}</p>
        <p>{user.email}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleDetailsClick}>Details</Button>
      </CardFooter>
    </Card>
  );
};