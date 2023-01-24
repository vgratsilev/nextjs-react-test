import { ReactNode } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

interface IMainComponentProps {
    children: ReactNode;
    title?: string;
}

const MainComponent = (props: IMainComponentProps) => {
    const { children, title = '' } = props;
    return (
        <>
            <Head>
                <meta content={'nextjs'} />
                <title>{title}</title>
            </Head>
            <Nav />
            <div>{children}</div>;
        </>
    );
};

export default MainComponent;
