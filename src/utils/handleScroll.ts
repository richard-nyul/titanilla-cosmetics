export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  sectionId: string
) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 91;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
