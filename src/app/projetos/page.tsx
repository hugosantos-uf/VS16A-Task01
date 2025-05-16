import React from "react";
import styles from "./projetos.module.scss";
import ListaDeCards from "@/components/cardList/CardList";

const Projetos = () => {
  return (
    <section className={styles.container}>
      <p className={styles.hello}>Meu portifólio</p>
      <h5>Meus últimos trabalhos</h5>
      <div className={styles.intro}>
        <div className={styles.conteudo}>
          <p className={styles.texto}>
            Aqui estão alguns dos meus projetos mais recentes e relevantes,
            demonstrando minhas habilidades técnicas e minha capacidade de
            resolver desafios reais no desenvolvimento de software.
          </p>
          <div className={styles.cards}>
            <ListaDeCards url="/data/projetos.json" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
