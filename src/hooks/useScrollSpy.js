import { useEffect, useState, useRef } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const observer = useRef(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
