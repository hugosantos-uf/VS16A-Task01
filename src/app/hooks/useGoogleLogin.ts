// hooks/useGoogleLogin.ts
import { useGoogleLogin as useGoogleLoginBase } from "@react-oauth/google";

export function useGoogleLogin(onSuccess: (token: string) => void) {
  const login = useGoogleLoginBase({
    onSuccess: (tokenResponse) => {
      onSuccess(tokenResponse.access_token);
    },
    onError: (errorResponse) => {
      console.error("Erro no login com Google:", errorResponse);
    },
  });

  return login;
}
