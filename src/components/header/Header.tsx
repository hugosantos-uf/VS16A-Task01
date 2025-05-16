import React from "react";
import styles from "./header.module.scss";
import NavBar from "../navbar/Navbar";
import { LoginButton } from "../login/Login";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        HugoSantos<span>.</span>
      </h1>
      <NavBar />
      <LoginButton />
    </header>
  );
};

export default Header;
