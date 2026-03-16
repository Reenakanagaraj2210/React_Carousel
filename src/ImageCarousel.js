import React, { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1019/600/300"
];

function ImageCarousel() {

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Next button
  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  // Previous button
  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px"
      }}
    >

      <img
        src={images[index]}
        alt="carousel"
        style={{
          width: "600px",
          height: "300px",
          borderRadius: "10px"
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={prevSlide}
        >
          Previous
        </button>

        <button onClick={nextSlide}>
          Next
        </button>
      </div>

      {/* Navigation dots */}
      <div style={{ marginTop: "10px" }}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              height: "12px",
              width: "12px",
              margin: "5px",
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: index === i ? "black" : "gray",
              cursor: "pointer"
            }}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default ImageCarousel;