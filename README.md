# Ex05 Image Carousel
## Date:16/3/2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
```
## App.js

import React from "react";
import ImageCarousel from "./ImageCarousel";

function App() {
  return (
    <div>
      <h1>React Image Carousel</h1>
      <ImageCarousel />
    </div>
  );
}

export default App;
```
```
## ImageCarousel.css

.carousel-container {
  position: relative;
  width: 600px;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-image {
  width: 100%;
  display: block;
  transition: transform 0.5s ease-in-out;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 18px;
  z-index: 2;
}

.prev { left: 10px; }
.next { right: 10px; }

.dots {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.dot {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: white;
}
```
```
## ImageCarousel.js

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

```
```
## index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

## OUTPUT
![alt text](<Screenshot 2026-03-16 112253.png>)

![alt text](<Screenshot 2026-03-14 162438.png>)

![alt text](<Screenshot 2026-03-16 112306.png>)

## RESULT
The program for creating Image Carousel using React is executed successfully.
