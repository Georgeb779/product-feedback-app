export const handleOpenSideBard = (
  isOpen: boolean,
  setIsOpen: (arg0: boolean) => void
) => {
  setIsOpen(!isOpen);
  if (!isOpen) {
    document.body.classList.add("modal-open");
    window.scrollTo(0, 0);
  } else {
    document.body.classList.remove("modal-open");
  }
};
