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
              <h3>Desenvolvimento Web</h3>
              <p>
                Criação de aplicações modernas, responsivas e performáticas
                utilizando tecnologias como React, Next.js e TypeScript. Ideal
                para empresas que desejam uma presença digital robusta e
                escalável.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Automação de Testes</h3>
              <p>
                Implantação de testes automatizados para garantir a qualidade do
                seu software. Uso de ferramentas como Cypress, Selenium e
                Postman para testes funcionais, de API e UI.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Criação de APIs</h3>
              <p>
                Desenvolvimento de APIs RESTful seguras, escaláveis e com
                autenticação JWT. Integração com bancos de dados PostgreSQL e
                foco em boas práticas de arquitetura backend.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Devops CI/CD</h3>
              <p>
                Integração contínua e entrega contínua com GitHub Actions,
                Docker, Allure Reports e notificações em canais como Discord.
                Ideal para automatizar fluxos de teste e deploy em projetos
                reais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
