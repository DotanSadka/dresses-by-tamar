
import { useState, useRef } from "react";
import { ZoomIn } from "lucide-react";

interface ImageMagnifierProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  magnifierSize?: number;
  zoomLevel?: number;
}

const ImageMagnifier = ({
  src,
  alt,
  width = 500,
  height = 500,
  magnifierSize = 150,
  zoomLevel = 2.5
}: ImageMagnifierProps) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imgRef.current) {
      const elem = imgRef.current;
      // Get the position of image element
      const { top, left } = elem.getBoundingClientRect();
      
      // Calculate cursor position relative to the image
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div className="relative group">
      <div
        className="relative"
        style={{
          width: width,
          height: height
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
        />
        
        {/* Magnifier icon overlay */}
        <div className="absolute top-4 right-4 bg-white/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="h-5 w-5 text-gray-600" />
        </div>

        {/* Magnifier lens */}
        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: `${magnifierSize}px`,
              height: `${magnifierSize}px`,
              top: mousePosition.y - magnifierSize / 2,
              left: mousePosition.x - magnifierSize / 2,
              border: "2px solid white",
              borderRadius: "50%",
              pointerEvents: "none",
              backgroundColor: "white",
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
              backgroundPosition: `${-mousePosition.x * zoomLevel + magnifierSize / 2}px ${
                -mousePosition.y * zoomLevel + magnifierSize / 2
              }px`,
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
              zIndex: 10
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageMagnifier;
