// hooks/useGallery.ts
import { useState } from "react";

export function useGallery(images: string[]) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return {
    currentImage: images[index],
    currentIndex: index,
    next,
    prev,
  };
}
