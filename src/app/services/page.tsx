import React from "react";
import styles from "./services.module.scss";
import ListaDeCards from "@/components/cardList/CardList";

const Services = () => {
  return (
    <section className={styles.container}>
      <p className={styles.hello}>O que eu ofereço</p>
      <h5>Meus serviços</h5>
      <div className={styles.intro}>
        <div className={styles.conteudo}>
          <p className={styles.texto}>
            Ofereço serviços de desenvolvimento web, automação de testes,
            criação de APIs e DevOps CI/CD. Meu objetivo é entregar soluções
            escaláveis e de alta qualidade que atendam às necessidades do seu
            negócio.
          </p>
          <div className={styles.cards}>
            <ListaDeCards url="/data/servicos.json" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
