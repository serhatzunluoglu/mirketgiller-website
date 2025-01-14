import { animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ from = 0, to = 100, duration = 2 }) => {
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1, rootMargin: '-120px 0px 0px 0px' }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }
  }, [isVisible, from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
};

export default Counter;
