import { useRouter } from 'next/router';
import MainComponent from '../../components/MainComponent';

export default function ({ user }) {
    const { query } = useRouter();
    return (
        <MainComponent>
            <h1>{`User with id ${query.id}`}</h1>
            <div>{`User name is ${user.name}`}</div>
        </MainComponent>
    );
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user },
    };
}
