import Link from "next/link";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/menu2">Menu 2</Link>
        </li>
        <li>
          <Link href="/menu3">Menu 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
