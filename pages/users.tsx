import A from '../components/A';
import MainComponent from '../components/MainComponent';

type User = {
    id: number;
    name: string;
};

export default function Users({ users }) {
    return (
        <MainComponent title={'Users page'}>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <A href={`/users/${user.id}`} text={user.name} />
                    </li>
                ))}
            </ul>
        </MainComponent>
    );
}

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    return {
        props: { users },
    };
}
