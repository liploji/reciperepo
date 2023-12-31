const APP_ID = "aef66a74";
const APP_KEY = "3a3fe067527bc8fee6ca2a2bc5e17340";

export const APIEdamam = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&q=${query}`
  );
  const data = await response.json();
  return data.hits;
};
