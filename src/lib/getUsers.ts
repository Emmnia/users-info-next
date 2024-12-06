export async function getUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            next: { revalidate: 3600 },
        });

        if (!res.ok) throw new Error('Failed to fetch users');

        const users = await res.json();

        return users;
    } catch (error) {

        console.error('Error fetching users:', error);
    }
}
