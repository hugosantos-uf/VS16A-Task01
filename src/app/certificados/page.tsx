import React from "react";
import styles from "./certificados.module.scss";
import { Gallery } from "@/components/gallery/Gallery";

const Certificados = () => {
  const images = [
    "/certificados/prepara.jpeg",
    "/certificados/VS15.jpeg",
    "/certificados/fst.jpeg",
    "/certificados/testathon.jpeg",
  ];

  return (
    <section className={styles.container}>
      <p className={styles.hello}>Veja minhas</p>
      <h5>Certificações relevantes</h5>
      <div className={styles.intro}>
        <div className={styles.conteudo}>
          <p className={styles.texto}>
            Nessa página estarei exibindo as principais certifições que recebi
            na minha jornada como desenvolvedor, fique a vontade para navegar
            entre elas!
          </p>
          <Gallery images={images} />
        </div>
      </div>
    </section>
  );
};

export default Certificados;
