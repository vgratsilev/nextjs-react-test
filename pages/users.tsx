// import { useState } from 'react';
import Nav from '../components/Nav';
import A from '../components/A';

type User = {
    id: number;
    name: string;
};

// const usersInitial: User[] = [
//     { id: 1, name: 'Biba' },
//     { id: 2, name: 'Boba' },
// ];

const Users = ({ users }) => {
    // const [users, setUsers] = useState<User[]>(usersInitial);
    return (
        <div>
            <Nav />
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <A href={`/users/${user.id}`} text={user.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    return {
        props: { users },
    };
}
