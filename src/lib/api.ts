export async function getUsers() {
    const baseUrl =
        //   process.env.NEXT_PUBLIC_BASE_URL || 
        'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api`);

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    return res.json();
}

export async function getUser(id: string) {
    const baseUrl =
        //   process.env.NEXT_PUBLIC_BASE_URL || 
        'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api/user/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch user with id ${id}`);
    }

    return res.json();
}