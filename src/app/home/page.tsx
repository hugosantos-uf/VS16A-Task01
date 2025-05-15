import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

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
            Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre
            meu trabalho, habilidades e projetos. Sinta-se à vontade para
            explorar e conhecer mais sobre minha trajetória como desenvolvedor
            full stack.
          </p>
          <div className={styles.botoes}>
            <Link href="/contato" className={styles.botao}>
              Entrar em contato
              <SlArrowRight size={13} style={{ marginLeft: "0.5rem" }} />
            </Link>
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
