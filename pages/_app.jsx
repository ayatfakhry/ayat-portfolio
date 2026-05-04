import '../styles/globals.css';
import { useEffect, useRef } from 'react';

export default function App({ Component, pageProps }) {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const move = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX - 4 + 'px';
        cursor.style.top = e.clientY - 4 + 'px';
      }
      if (ring) {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }
    };

    const enter = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1.8)';
    };
    const leave = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Component {...pageProps} />
    </>
  );
}
