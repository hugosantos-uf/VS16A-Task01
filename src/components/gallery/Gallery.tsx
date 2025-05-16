"use client";

import { useGallery } from "@/app/hooks/useGallery";

interface GalleryProps {
  images: string[];
  width?: string;
  height?: string;
}

export function Gallery({
  images,
  width = "450px",
  height = "300px",
}: GalleryProps) {
  const { currentImage, next, prev } = useGallery(images);

  if (!images || images.length === 0) return <p>Nenhuma imagem disponível.</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width, height, margin: "0 auto" }}>
        <img
          src={currentImage}
          alt="Imagem da galeria"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={prev} style={{ marginRight: "10px" }}>
          Anterior
        </button>
        <button onClick={next}>Próxima</button>
      </div>
    </div>
  );
}
