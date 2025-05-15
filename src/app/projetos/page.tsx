import React from "react";
import styles from "./projetos.module.scss";
import Image from "next/image";
import Card from "@/components/card/Card";

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
            <Card
              imagemSrc="/supermercado.jpg"
              titulo="Sistema de Supermercado"
              texto="Aplicação Java com controle de produtos, clientes e vendedores."
            />

            <Card
              imagemSrc="/cavalos.png"
              titulo="Jogo de Corrida de Cavalos"
              texto="Simulador de apostas com lógica de atributos e pistas variáveis."
            />

            <Card
              imagemSrc="/swagger.png"
              titulo="CRUD com Spring Boot"
              texto="Backend completo com PostgreSQL e autenticação JWT."
            />

            <Card
              imagemSrc="/allure.png"
              titulo="Testes de API com Java"
              texto="Testes automatizados de endpoints REST com Java, integração com Allure e Discord"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
