import React from "react";
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
          <Link href="/about">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/services">Serviços</Link>
        </li>
        <li>
          <Link href="/menu2">Trabalhos</Link>
        </li>
        <li>
          <Link href="/menu3">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
