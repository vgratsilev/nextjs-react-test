// import Link from 'next/link';
import Nav from '../components/Nav';

const Index = () => {
    return (
        <div>
            <Nav />
            {/*<div className={'navbar'}>*/}
            {/*    <Link href={'/'} className={'link'}>*/}
            {/*        Main page*/}
            {/*    </Link>*/}
            {/*    <Link href={'/users'}>Users page</Link>*/}
            {/*</div>*/}
            <h1>Main page</h1>
            {/*<style jsx>*/}
            {/*    {`*/}
            {/*        .navbar {*/}
            {/*            background: orange;*/}
            {/*            padding: 15px;*/}
            {/*        }*/}
            {/*        .link {*/}
            {/*            text-decoration: none;*/}
            {/*            color: white;*/}
            {/*            font-size: 20px;*/}
            {/*            margin: 10px;*/}
            {/*        }*/}
            {/*    `}*/}
            {/*</style>*/}
        </div>
    );
};

export default Index;
