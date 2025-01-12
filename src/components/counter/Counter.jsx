import { animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Counter = ({ from = 0, to = 100, duration = 2 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
};

export default Counter;
