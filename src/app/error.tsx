'use client'

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="w-[400px] mx-auto mt-20 flex flex-col flex-wrap gap-5 content-center">
            <h2>Something went wrong!</h2>
            <Button onClick={() => reset()}>Try again</Button>
            <Link href="/" className="self-center">&larr; Back to User List</Link>
        </div>
    )
}