import { User } from "@/models/user";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface UserDetailsProps {
    user: User;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {

    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.address.street}, {user.address.city}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>{user.company.name}</p>
            </CardContent>
        </Card>
    );
};