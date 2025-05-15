import React from "react";
import styles from "./services.module.scss";

const Services = () => {
  return (
    <section className={styles.container}>
      <p className={styles.hello}>O que eu ofereço</p>
      <h5>Meus serviços</h5>
      <div className={styles.intro}>
        <div className={styles.conteudo}>
          <p className={styles.texto}>
            Sou desenvolvedor full stack com foco em aplicações web modernas.
            Atualmente estudo Engenharia de Software e após um período atuando
            como QA, estou expandindo meus conhecimentos no mundo do
            desenvolvimento web com tecnologias como Java, React e PostgreSQL.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Linguagens</h3>
              <p>JS, React, Next, Java, Spring</p>
            </div>
            <div className={styles.card}>
              <h3>Educação</h3>
              <p>Bacharel em Engenharia de Software</p>
            </div>
            <div className={styles.card}>
              <h3>Projetos</h3>
              <p>Mais de 5 projetos concluídos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
