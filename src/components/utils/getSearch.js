const getSearch = () => {
  function startSearch(event) {
    // Obtain city entered by user in input field:
    const cityInput = document.getElementById('search').value;
    const endUrl = cityInput + '&appid=' + 'aa9a34cedf6ee48f7f46aaa5b53839e2';
    const unitsMetric = '&units=metric';
    // base API url:
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    // if input provided is not correct input, stop executing:
    if (cityInput === null || cityInput === '') return;
    // otherwise, append user input to the base url"
    const searchUrl = baseUrl + endUrl + unitsMetric;
    performSearch(searchUrl);
  }

  const performSearch = async (searchUrl) => {
    try {
      const response = await fetch(searchUrl, { mode: 'cors' });
      const data = await response.json();
      console.log(data);

      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

export default getSearch;
