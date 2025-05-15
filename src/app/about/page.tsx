import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.container}>
      <p className={styles.hello}>Uma breve introdução</p>
      <h5>Sobre mim</h5>
      <div className={styles.intro}>
        <div className={styles.foto}>
          <Image
            src="/perfil.jpg"
            alt="Minha foto"
            width={300}
            height={300}
            className={styles.imagemPerfil}
          />
        </div>
        <div>
          <p className={styles.texto}>
            Sou desenvolvedor full stack com foco em aplicações web modernas.
            Atualmente estudo Engenharia de Software e após um período atuando
            como QA, estou expandindo meus conhecimentos no mundo do
            desenvolvimento web com tecnologias como Java, React e PostgreSQL.
          </p>
          <p className={styles.texto}>
            Este site é meu portfólio pessoal — fique à vontade para conhecer
            meus projetos e me contatar!
          </p>
          <div className={styles.card}>
            <h3>Testes Automatizados com Cypress</h3>
            <p>
              Testes de UI automatizados para aplicações web, incluindo testes
              de formulário, navegação e integração contínua com GitHub Actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
