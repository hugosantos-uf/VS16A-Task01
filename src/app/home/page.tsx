import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.foto}>
          <Image
            src="/perfil.jpg"
            alt="Minha foto"
            width={150}
            height={150}
            className={styles.imagemPerfil}
          />
        </div>
        <div>
          <p className={styles.hello}>Olá, eu sou Hugo! 👋🏻</p>
          <h5>Desenvolvedor Full Stack na Dbc Company</h5>
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
          <div className={styles.botoes}>
            <a href="#contato" className={styles.botao}>
              Entrar em contato
              <SlArrowRight size={13} style={{ marginLeft: "0.5rem" }} />
            </a>
            <a href="/curriculo.pdf" download className={styles.botao}>
              Baixar currículo
              <FiDownload size={13} style={{ marginLeft: "0.5rem" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
