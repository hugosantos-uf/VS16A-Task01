import React from "react";
import styles from "./header.module.scss";
import NavBar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        HugoSantos<span>.</span>
      </h1>
      <NavBar />
      <p>Conecte-se comigo</p>
    </header>
  );
};

export default Header;
