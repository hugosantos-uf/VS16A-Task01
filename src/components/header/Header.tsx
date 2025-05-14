import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        HugoSantos<span>.</span>
      </h1>
    </header>
  );
};

export default Header;
