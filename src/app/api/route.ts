import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch users' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}