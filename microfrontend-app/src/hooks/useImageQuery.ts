import { useEffect, useState } from "react";

export const useImageQuery = () => {
  const [images, setImages] = useState<string[]>(null);
  useEffect(() => {
    setImages([
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ]);
  }, []);

  return { images };
};
