import { CarouselProps } from "./index.interface";

export default function Carousel({ images }: CarouselProps) {
  return (
    <div className="carousel rounded-xl gap-4">
      {images.map((image, i) => (
        <div key={`${image.alt}-${i}`} className="w-full carousel-item">
          <img
            className="w-full bg-grey-light aspect-square object-contain rounded-xl"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
