import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { ScrollToTopBtn } from './ScrollToTopButton.styled';

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const visibllityToogle = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1600,
      smooth: true,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', visibllityToogle);

    return () => {
      window.removeEventListener('scroll', visibllityToogle);
    };
  }, []);

  return (
    <>
      {visible && (
        <ScrollToTopBtn
          type="button"
          aria-label="scroll up"
          onClick={scrollToTop}
        >
          ▲
        </ScrollToTopBtn>
      )}
    </>
  );
};
