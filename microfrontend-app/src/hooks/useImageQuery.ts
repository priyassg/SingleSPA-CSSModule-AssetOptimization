import { useEffect, useState } from "react";

export const useImageQuery = () => {
  const [images, setImages] = useState<string[]>(null);
  useEffect(() => {
    setImages([
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
      "https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg",
    ]);
  }, []);

  return { images };
};
