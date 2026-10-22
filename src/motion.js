import {useEffect, useLayoutEffect, useRef} from 'react';

const preference = () => window.matchMedia('(prefers-reduced-motion: reduce)');

function animate(element, keyframes, options) {
  if (!element?.animate || preference().matches) return () => {};
  const media = preference();
  const animation = element.animate(keyframes, {duration: 420, easing: 'cubic-bezier(.22,1,.36,1)', ...options});
  const cancel = () => animation.cancel();
  media.addEventListener('change', cancel, {once: true});
  const removeListener = () => media.removeEventListener('change', cancel);
  animation.addEventListener('finish', removeListener, {once: true});
  animation.addEventListener('cancel', removeListener, {once: true});
  return () => { removeListener(); cancel(); };
}

export function usePageReveal(dependency) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const cleanups = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (entry.target.dataset.revealed) return;
        entry.target.dataset.revealed = 'true';
        cleanups.push(animate(entry.target, [
          {opacity: 0, transform: 'translateY(22px)'},
          {opacity: 1, transform: 'translateY(0)'},
        ], {duration: 650}));
      });
    }, {threshold: 0.08});
    document.querySelectorAll('.hero-copy, .hero-art, .collection, .offer, .brand-end').forEach(el => observer.observe(el));
    return () => { observer.disconnect(); cleanups.forEach(cancel => cancel()); };
  }, [dependency]);
}

export function usePhotoMotion(active) {
  const ref = useRef(null);
  const previous = useRef(active);
  useLayoutEffect(() => {
    if (previous.current === active) return;
    previous.current = active;
    return animate(ref.current, [{opacity: .3, transform: 'scale(.97)'}, {opacity: 1, transform: 'scale(1)'}], {duration: 320});
  }, [active]);
  return ref;
}

export function useCollectionMotion(expanded, items) {
  const ref = useRef(null);
  const previous = useRef(null);
  useLayoutEffect(() => {
    const element = ref.current;
    const height = element.getBoundingClientRect().height;
    const before = previous.current;
    previous.current = {height, expanded};
    if (!before) return;
    const cleanups = [];
    if (before.expanded !== expanded) {
      cleanups.push(animate(element, [{height: `${before.height}px`, overflow: 'hidden'}, {height: `${height}px`, overflow: 'hidden'}]));
    }
    Array.from(element.children).forEach((card, index) => {
      cleanups.push(animate(card, [{opacity: .2, transform: 'translateY(12px)'}, {opacity: 1, transform: 'translateY(0)'}], {delay: Math.min(index * 35, 175)}));
    });
    return () => cleanups.forEach(cancel => cancel());
  }, [expanded, items]);
  return ref;
}

export function scrollProducts(element, left) {
  element.scrollBy({left, behavior: preference().matches ? 'instant' : 'smooth'});
}
