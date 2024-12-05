import { UserDetails } from "@/components/UserDetails/UserDetails";
import { notFound } from 'next/navigation';
import { getUser } from "@/lib/api";

export default async function UserPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const user = await getUser(id);

    if (!user) notFound();

    return <UserDetails user={user} />;
};