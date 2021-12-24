export const addCssProp = (
  elemId: string,
  cssProp: string,
  e?: React.MouseEvent
) => {
  e && e.preventDefault();
  const elem = document.getElementById(elemId);
  elem?.classList.add(cssProp);
};

export const replaceCssClass = (
  elemId: string,
  oldClass: string,
  newClass: string
) => {
  const elem = document.getElementById(elemId);
  elem?.classList.remove(oldClass);
  elem?.classList.add(newClass);
};
