import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiSpring,
  SiDocker,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

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
            height={400}
            className={styles.imagemPerfil}
          />
        </div>
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
          <p>Ferramentas que eu uso</p>
          <div className={styles.ferramentas}>
            <SiReact className={styles.icone} title="React" />
            <SiNextdotjs className={styles.icone} title="Next.js" />

            <SiSpring className={styles.icone} title="Spring Boot" />
            <SiPostgresql className={styles.icone} title="PostgreSQL" />
            <VscVscodeInsiders className={styles.icone} title="VSCode" />
            <SiGit className={styles.icone} title="Git" />
            <SiDocker className={styles.icone} title="Docker" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
