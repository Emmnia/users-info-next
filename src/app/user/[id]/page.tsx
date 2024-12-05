import { UserDetails } from "@/components/UserDetails/UserDetails";
import { notFound } from 'next/navigation';
import { getUser } from "@/lib/api";
import Link from 'next/link';

export default async function UserPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const user = await getUser(id);

    if (!user) notFound();

    return (
        <div className="text-center">
            <UserDetails user={user} />
            <Link href="/" className="animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">&larr; Back to User List</Link>
        </div>

    )
};