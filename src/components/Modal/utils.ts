export const disableScrollOnBody = (): void => {
  const scrollY = `${window.scrollY}px`;
  const { body } = document;

  body.classList.add('is-fixed');
  body.style.top = `-${scrollY}`;
};

export const enableScrollOnBody = (): void => {
  const { body } = document;
  const scrollY = body.style.top;

  body.classList.remove('is-fixed');
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
