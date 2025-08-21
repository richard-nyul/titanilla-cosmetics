import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useHandleScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const maxAttempts = 50;
    let attempts = 0;

    const intervalId = setInterval(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 91;
        window.scrollTo({ top: y, behavior: 'smooth' });
        clearInterval(intervalId);
      } else if (attempts >= maxAttempts) {
        clearInterval(intervalId);
      }
      attempts++;
    }, 100);
  };

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
      e.preventDefault();

      if (window.location.pathname !== '/') {
        setScrollTarget(sectionId);
        navigate('/');
        return;
      }
      scrollToSection(sectionId);
    },
    [navigate]
  );

  useEffect(() => {
    const sectionId = scrollTarget || location.state?.scrollTo;
    if (!sectionId) return;

    scrollToSection(sectionId);
    setScrollTarget(null);
  }, [scrollTarget, location.state]);

  return { handleScroll };
};
