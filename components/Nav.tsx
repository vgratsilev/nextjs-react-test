import ActiveLink from './ActiveLink';
import styles from '../styles/Nav.module.scss';

const Nav = () => (
    <nav className={'navbar'}>
        <style>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }
            `}
        </style>
        <ActiveLink activeClassName={styles.active} className={styles.navLink} href="/">
            Main page
        </ActiveLink>

        <ActiveLink activeClassName={styles.active} className={styles.navLink} href="/users">
            Users page
        </ActiveLink>
    </nav>
);

export default Nav;
