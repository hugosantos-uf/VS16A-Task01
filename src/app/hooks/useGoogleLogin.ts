// hooks/useGoogleLogin.ts
import { useState } from "react";
import { useGoogleLogin as useGoogleLoginBase } from "@react-oauth/google";
import axios from "axios";

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

export function useGoogleLogin() {
  const [user, setUser] = useState<GoogleUser | null>(null);

  const login = useGoogleLoginBase({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get<GoogleUser>(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setUser(res.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário", error);
      }
    },
    onError: () => {
      console.error("Login com Google falhou");
    },
  });

  return { user, login };
}
