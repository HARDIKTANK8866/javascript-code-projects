async function fetchData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  function printData(data) {
    if (data) {
      data.forEach(item => {
        console.log(item);
      });
    }
  }
  
  async function main() {
    const apiUrl = 'https://fakestoreapi.com/products'; // Replace this with the actual API URL
    const data = await fetchData(apiUrl);
    printData(data);
  }
  
  main();