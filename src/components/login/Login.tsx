"use client";

import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.scss";
import { useGoogleLogin } from "@/app/hooks/useGoogleLogin";

export function LoginButton() {
  const { user, login } = useGoogleLogin();

  return (
    <button className={styles.button} onClick={() => login()}>
      <FcGoogle size={20} />
      {user ? `Bem-vindo, ${user.name}` : "Entrar com Google"}
    </button>
  );
}
