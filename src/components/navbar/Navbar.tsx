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
          <Link href="/menu2">Projetos</Link>
        </li>
        <li>
          <Link href="/menu3">Entre em Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
