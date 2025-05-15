import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

type CardProps = {
  imagemSrc?: string;
  titulo: string;
  texto: string;
};

const Card = ({ imagemSrc, titulo, texto }: CardProps) => {
  return (
    <div className={styles.card}>
      {imagemSrc && (
        <Image
          src={imagemSrc}
          alt={titulo}
          width={150}
          height={150}
          className={styles.imagem}
        />
      )}
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
};

export default Card;
