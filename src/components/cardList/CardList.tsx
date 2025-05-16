"use client";

import Card from "../card/Card";
import { useFetch } from "@/app/hooks/useFetch";

interface ListaDeCardsProps {
  url: string;
}

interface ItemDaAPI {
  id: number;
  title: string;
  body: string;
  image?: string;
}

const ListaDeCards = ({ url }: ListaDeCardsProps) => {
  const { data, loading, error } = useFetch<ItemDaAPI[]>(url);

  if (loading) return <p>Carregando cards...</p>;
  if (error) return <p>Erro ao carregar: {error.message}</p>;
  if (!data) return <p>Nenhum dado encontrado.</p>;

  return data.map((item) => (
    <Card
      key={item.id}
      imagemSrc={item.image}
      titulo={item.title}
      texto={item.body}
    />
  ));
};

export default ListaDeCards;
