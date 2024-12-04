'use client';

import { UserDetails } from "@/components/UserDetails/UserDetails";
import { useEffect, useState } from "react";
import { use } from 'react';

export default function Details({ params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = use(params);
    const [user, setUser] = useState(null);

    const id = unwrappedParams.id;

    useEffect(() => {
        const storedUser = localStorage.getItem(`user_${id}`);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [id]);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <UserDetails user={user} />
    );
}