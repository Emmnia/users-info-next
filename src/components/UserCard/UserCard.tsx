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
    <Card className="w-[260px] flex flex-col animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in hover:scale-105">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{user.company.name}</p>
        <p className="pt-3 text-gray-500">{user.email}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleDetailsClick}>Details</Button>
      </CardFooter>
    </Card>
  );
};