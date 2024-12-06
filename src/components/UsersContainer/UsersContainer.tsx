'use client'

import { useState } from "react";
import { User } from "@/models/user";
import { UserSearch } from "@/components/UserSearch/UserSearch";
import { UserCard } from "@/components/UserCard/UserCard";
import Link from "next/link";

interface UsersContainerProps {
    initialUsers: User[];
}

export const UsersContainer: React.FC<UsersContainerProps> = ({ initialUsers }) => {
    const [filteredUsers, setFilteredUsers] = useState<User[]>(initialUsers);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSearch = (query: string) => {
        if (query.trim() === "") {
            setFilteredUsers(initialUsers);
            setIsSearchActive(false);
        } else {
            const filtered = initialUsers.filter(user =>
                user.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(filtered);
            setIsSearchActive(true);
        }
    };

    const handleReset = () => {
        setFilteredUsers(initialUsers);
        setIsSearchActive(false);
    };

    return (
        <div>
            <UserSearch onSearch={handleSearch} />
            <h1 className="text-2xl font-bold text-center">Users</h1>
            <div className="flex flex-wrap justify-center gap-3 pt-10 px-8">
                {filteredUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            {isSearchActive && (
                <div className="text-center flex flex-col">
                    {filteredUsers.length === 0 && (
                        <p>No users found.</p>
                    )}
                    <Link href="/" onClick={handleReset} className="mt-10">
                        &larr; <span className="hover:underline">Back to User List</span>
                    </Link>
                </div>
            )}
        </div>
    );
};



