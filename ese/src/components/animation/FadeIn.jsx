import React from 'react'

const FadeIn = ({children, delay = 0, duration = 500, threshold = 0.1}) => {
  const prefersReducedMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const [isVisible, setIsVisible] = React.useState(prefersReducedMotion);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

        const currentElement = elementRef.current;
    if (!currentElement) {
      return undefined;
    }
        
        const observer = new IntersectionObserver(
            (entries) => {
              //Trigger animation when elements come into view
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
            observer.disconnect();
                    }
                })
            },
            { threshold: threshold, rootMargin: '0px 0px -50px 0px' } //triggers slightly before
        );

    observer.observe(currentElement);

        return () => {
      observer.disconnect();
        };
  }, [threshold, isVisible, prefersReducedMotion]);

  return (
    <div 
      ref={elementRef}
      className={`transition-all ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn