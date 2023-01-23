import ActiveLink from './ActiveLink';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => (
    <nav className={'navbar'}>
        <style>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }
                .active {
                    text-decoration: underline;
                }
                .active:after {
                    content: ' (current page)';
                }
            `}
        </style>
        <ActiveLink activeClassName="active" className={styles.navLink} href="/">
            Main page
        </ActiveLink>

        <ActiveLink activeClassName="active" className={styles.navLink} href="/users">
            Users page
        </ActiveLink>
    </nav>
);

export default Nav;
