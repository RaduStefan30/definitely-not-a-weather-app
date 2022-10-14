import { Fragment, useEffect, useRef } from "react";
import "./Canvas.css";

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particleArray = [];
    let hue = 0;

    const mouse = { x: undefined, y: undefined };

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      particleArray.push(new Particle());
    });

    window.addEventListener("touchmove", function (event) {
      console.log(event);
      mouse.x = event.targetTouches[0].clientX;
      mouse.y = event.targetTouches[0].clientY;
      particleArray.push(new Particle());
    });

    function Particle() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 3;
      this.speedX = Math.random() * 3 - 1;
      this.speedY = Math.random() * 3 - 1;
      this.color = `hsl(${hue},20%,85%)`;
    }
    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.1) this.size -= 0.05;
    };
    Particle.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    };

    function handleParticles() {
      particleArray.forEach((particle, i) => {
        particle.update();
        particle.draw();
        for (let j = 0; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            ctx.strokeStyle = particleArray[i].color;
            ctx.lineWidth = particle.size / 20;
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
        if (particle.size <= 0.3) {
          particleArray.splice(i, 1);

          i--;
        }
      });
    }
    function animate() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue++;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <Fragment>
      <div className="canvas__overlay"></div>
      <canvas ref={canvasRef} className="background">
        Canvas
      </canvas>
    </Fragment>
  );
};

export default Canvas;
