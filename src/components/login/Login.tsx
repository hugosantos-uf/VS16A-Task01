"use client";

import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.scss";
import { useGoogleLogin } from "@/app/hooks/useGoogleLogin";

export function LoginButton() {
  const login = useGoogleLogin((token) => {
    console.log("Token de acesso do Google:", token);
    // Aqui você pode armazenar o token ou buscar dados do usuário
  });

  return (
    <button className={styles.button} onClick={() => login()}>
      <FcGoogle size={20} />
      <span>Entrar com Google</span>
    </button>
  );
}
