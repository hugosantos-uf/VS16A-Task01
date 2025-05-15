import React from "react";
import styles from "./contato.module.scss";

const Contato = () => {
  return (
    <section className={styles.container}>
      <p className={styles.hello}>Conecte-se comigo</p>
      <h5>Com um clique</h5>
      <div className={styles.intro}>
        <div className={styles.conteudo}>
          <p className={styles.texto}>
            Eu adoraria ouvir de você! Se você possui qualquer dúvida,
            comentários ou feedback, por favor use o formulário abaixo.
          </p>
          <form className={styles.formulario}>
            <label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                required
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                required
              />
            </label>
            <label>
              <textarea
                name="mensagem"
                placeholder="Digite seu mensagem"
                rows={5}
                required
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
