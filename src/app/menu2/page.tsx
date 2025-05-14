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
        <div className={styles.card}>
          <h3>Testes Automatizados com Cypress</h3>
          <p>
            Testes de UI automatizados para aplicações web, incluindo testes de
            formulário, navegação e integração contínua com GitHub Actions.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Testes de API com Java + Allure</h3>
          <p>
            Testes automatizados de endpoints REST com Java, integração com
            Allure Reports e envio de resultados para Discord via GitHub
            Actions.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Ambiente de Testes com Selenium Grid e Docker</h3>
          <p>
            Ambiente de execução paralela com Selenium Grid configurado via
            Docker. Testes escritos em Java e gerenciados via IntelliJ.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Sistema de Academia</h3>
          <p>
            Website utilizando HTML e CSS com 3 páginas, layout responsivo,
            menus e formulários estilizados, com boas práticas de
            acessibilidade.
          </p>
        </div>

        <div className={styles.card}>
          <h3>MarketPlace de Serviços</h3>
          <p>
            Sistema FullStack utilizando NextJs, com foco em oferta e contrato
            de diversos tipos de serviços autônomos em um único ambiente
          </p>
        </div>

        <div className={styles.card}>
          <h3>Artifact Analyzer (FHIR)</h3>
          <p>
            Projeto backend com Java que consome e analisa artifacts FHIR
            utilizando a biblioteca HAPI FHIR. Refatorado para melhorar
            legibilidade e interoperabilidade em sistemas de saúde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu2Page;
