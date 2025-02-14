import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      constructor() {
        this.reset();
        // Initialize particles across the canvas
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Slightly larger particles for better visibility against dark background
        this.size = Math.random() * 2.5 + 1;
        // Slower movement for more elegant flow
        this.speedX = Math.random() * 0.25 - 0.125;
        this.speedY = Math.random() * 0.25 - 0.125;
        // Brighter particles to contrast with dark background
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Increased number of particles for richer background
    const particles = Array.from({ length: 100 }, () => new Particle());

    const animate = () => {
      // Darker overlay for trail effect
      ctx.fillStyle = 'rgba(0, 12, 40, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();

        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Brighter connections for better visibility
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section style={{ 
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      // Rich navy blue background with subtle gradient for depth
      background: 'linear-gradient(135deg, #001233 0%, #000C28 100%)'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '6rem 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '20px',
          fontWeight: '600',
          letterSpacing: '1px'
        }}>
          Technology Against Violence
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.2rem)',
          marginBottom: '30px',
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Innovative digital solutions to prevent, support, and empower survivors of gender-based violence.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <a
            href="#app-features"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#001233',
              padding: '12px 25px',
              borderRadius: '25px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            Explore Safe Haven
          </a>
          <a
            href="#support"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.8)',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '25px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
          >
            Get Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;