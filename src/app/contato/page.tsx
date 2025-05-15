import React from "react";
import styles from "./contato.module.scss";

const Menu3Page = () => {
  return (
    <section className={styles.container}>
      <h2>Entre em Contato</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem..." rows={4} required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Menu3Page;
