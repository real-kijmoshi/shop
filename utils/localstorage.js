export const getbg = () => {
  return localStorage.getItem("bg") || "light";
};

export const setbg = (val) => {
  localStorage.setItem("bg", val);
};
