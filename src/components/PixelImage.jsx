import { PixelImage } from "../components/ui/pixel-image";

export function PixelImageDemo() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PixelImage
        src="events/core.png"
        customGrid={{ rows: 12, cols: 16 }} // high detail
        grayscaleAnimation
        className="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
  );
}
