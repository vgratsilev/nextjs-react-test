import Head from 'next/head';
import Nav from '../components/Nav';

const Index = () => {
    return (
        <>
            <Head>
                <meta content={'nextjs'} />
                <title>Main page</title>
            </Head>
            <div>
                <Nav />
                <h1>Main page</h1>
            </div>
        </>
    );
};

export default Index;
