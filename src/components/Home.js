import React, { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function Box() {
      this.x = Math.floor(Math.random() * (canvas.width - 50));
      this.y = Math.floor(Math.random() * (canvas.height - 50));
      this.dx = Math.floor(Math.random() * 2 + 1);
      this.dy = Math.floor(Math.random() * 2 + 1);
      this.color = "rgba(199, 189, 163, 0.1)";
    }

    Box.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.strokeRect(this.x, this.y, 50, 50);
    };

    Box.prototype.update = function () {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x + 50 > canvas.width || this.x < 0) {
        this.dx = -this.dx;
      }

      if (this.y + 50 > canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }

      // Ensure boxes do not overlap the text in the middle
      if (
        this.x > canvas.width / 2 - 4000 &&
        this.x < canvas.width / 2 + 400 &&
        this.y > canvas.height / 2 - 100 &&
        this.y < canvas.height / 2 + 100
      ) {
        this.x = Math.floor(Math.random() * (canvas.width - 50));
        this.y = Math.floor(Math.random() * (canvas.height - 50));
      }
    };

    var boxes = [];

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].update();
        boxes[i].draw();
      }
    }

    var intervalID = setInterval(function () {
      boxes.push(new Box());
    }, 100);

    setTimeout(function () {
      clearInterval(intervalID);
    }, 2000);

    animate();

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div
      style={{
        color: "#6495ED",
        position: "relative",
        backgroundColor: "#efd9b4",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div style={{ textAlign: "center", color: "#292522", width: "70%" }}>
        <h1 style={{ fontSize: "36px" }}>Welcome to our Health App</h1>
        <p style={{ fontSize: "18px" }}>
          Our mission is to help you track your progress and maintain a healthy
          lifestyle through a fun and interactive experience.
        </p>
      </div>
    </div>
  );
}
