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
        <Card className="w-5/6 md:w-[400px] mx-auto my-20 animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">
            <CardHeader>
                <CardTitle>{user.name} <span className="italic ">({user.username})</span></CardTitle>
                <p className="text-gray-500 text-sm">{user.email}</p>
            </CardHeader>
            <CardContent className="text-left">
                <p><b>address:</b> {user.address.street}, {user.address.city}</p>
                <p><b>tel.</b> {user.phone}</p>
                <p><b>website:</b> {user.website}</p>
                <p><b>company:</b> {user.company.name}</p>
            </CardContent>
        </Card>
    );
};