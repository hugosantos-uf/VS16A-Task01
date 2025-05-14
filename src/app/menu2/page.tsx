import React from "react";
import styles from "./projetos.module.scss";

const Menu2Page = () => {
  return (
    <section className={styles.container}>
      <h2>Projetos em Destaque</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Sistema de Supermercado</h3>
          <p>Aplicação Java com controle de produtos, clientes e vendedores.</p>
        </div>
        <div className={styles.card}>
          <h3>Jogo de Corrida de Cavalos</h3>
          <p>
            Simulador de apostas com lógica de atributos e pistas variáveis.
          </p>
        </div>
        <div className={styles.card}>
          <h3>CRUD com Spring Boot</h3>
          <p>Backend completo com PostgreSQL e autenticação JWT.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu2Page;
