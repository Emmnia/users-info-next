import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch user' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}