const baseUrl = 'https://63f5fa8459c944921f6a8007.mockapi.io/news';

export const fetchCocktails = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: 'GET'
      // headers: {
      //   'X-RapidAPI-Key': 'e87f90002amsh119f0c6e102f384p1ba1e1jsn02565a9ca0fc',
      //   'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      // }
    });
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
