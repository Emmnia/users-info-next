import { UserDetails } from "@/components/UserDetails/UserDetails";
import { notFound } from 'next/navigation';
import { getUsers } from "@/lib/getUsers";
import { User } from "@/models/user";
import Link from 'next/link';

export async function generateStaticParams() {
    const users: User[] = await getUsers();
    return users.map((user) => ({
        id: user.id.toString(),
    }));
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
    const users = await getUsers();
    const { id } = await params;
    const user = users.find((u: User) => u.id.toString() === id);

    if (!user) notFound();

    return (
        <div className="text-center">
            <UserDetails user={user} />
            <Link href="/" className="animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">&larr; <span className="hover:underline">Back to User List</span></Link>
        </div>

    )
};