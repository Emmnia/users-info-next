export async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch users');

    const users = await res.json();

    return users;
}
