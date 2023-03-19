const APP_NAME = "JSQUIZ";

export const setQuizLocalStorage = (data) => {
  if (!data || Object.keys(data || {})?.length < 1) return;
  let prevData = getQuizLocalStorage();
  let stringData = JSON.stringify({ ...prevData, ...data });
  localStorage.setItem(APP_NAME, stringData);
};

export const getQuizLocalStorage = () => {
  let stringData = localStorage.getItem(APP_NAME);
  let data = JSON.parse(stringData || "{}");
  return data;
};
