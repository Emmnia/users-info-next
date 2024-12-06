'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UserSearchProps {
    onSearch: (query: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
    const [value, setValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch(value);
        setValue("");
    };

    return (
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto mt-20 mb-10 animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">
            <Input
                type="text"
                placeholder="Name or email"
                value={value}
                onChange={handleInputChange}
            />
            <Button type="button" onClick={handleSearch}>Search</Button>
        </div>
    );
};


