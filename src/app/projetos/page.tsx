import React from "react";
import styles from "./projetos.module.scss";
import Image from "next/image";

const Projetos = () => {
  return (
    <section className={styles.container}>
      <p className={styles.hello}>Meu portifólio</p>
      <h5>Meus últimos trabalhos</h5>
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
              <Image
                src="/supermercado.jpg"
                alt="supermercado"
                width={150}
                height={150}
              />
              <h3>Sistema de Supermercado</h3>
              <p>
                Aplicação Java com controle de produtos, clientes e vendedores.
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src="/cavalos.png"
                alt="cavalos"
                width={150}
                height={150}
              />
              <h3>Jogo de Corrida de Cavalos</h3>
              <p>
                Simulador de apostas com lógica de atributos e pistas variáveis.
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src="/swagger.png"
                alt="swagger"
                width={150}
                height={150}
              />
              <h3>CRUD com Spring Boot</h3>
              <p>Backend completo com PostgreSQL e autenticação JWT.</p>
            </div>
            <div className={styles.card}>
              <Image src="/allure.png" alt="allure" width={150} height={150} />
              <h3>Testes de API com Java + Allure</h3>
              <p>
                Testes automatizados de endpoints REST com Java, integração com
                Allure Reports e envio de resultados para Discord via GitHub
                Actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;

/*       <div className={styles.grid}>
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
      </div> */
