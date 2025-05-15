import React from "react";
import styles from "./services.module.scss";
import Card from "@/components/card/Card";

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
            <Card
              titulo="Desenvolvimento Web"
              texto="Criação de aplicações modernas, responsivas e performáticas utilizando tecnologias como React, Next.js e TypeScript. Ideal para empresas que desejam uma presença digital robusta e escalável."
            />
            <Card
              titulo="Automação de Testes"
              texto="Implantação de testes automatizados para garantir a qualidade do seu software. Uso de ferramentas como Cypress, Selenium e Postman para testes funcionais, de API e UI."
            />
            <Card
              titulo="Criação de APIs"
              texto="Desenvolvimento de APIs RESTful seguras, escaláveis e com autenticação JWT. Integração com bancos de dados PostgreSQL e foco em boas práticas de arquitetura backend."
            />
            <Card
              titulo="Devops CI/CD"
              texto="Integração contínua e entrega contínua com GitHub Actions, Docker, Allure Reports e notificações em canais como Discord. Ideal para automatizar fluxos de teste e deploy em projetos reais."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
