import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className={styles.container}>
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
          <h2>Olá, eu sou Hugo!</h2>
          <p>
            Sou desenvolvedor full stack com foco em aplicações web modernas.
            Atualmente estudo Engenharia de Software e após um período atuando
            como QA, estou expandindo meus conhecimentos do mundo do
            desenvolvimento web com tecnologias como Java, React e PostgreSQL.
          </p>
          <p>
            Este site é meu portfólio pessoal — fique à vontade para conhecer
            meus projetos e me contatar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
