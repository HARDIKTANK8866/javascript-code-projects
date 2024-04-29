function myAxios(method, url, body = null) {
  //post put any other method body use get[body not use]

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("content-type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
        console.log("failed!");
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body)); //object convert to string
  });
}

const url = "https://jsonplaceholder.typicode.com/users";

// myAxios('GET',url)

myAxios("POST", url, {
  name: "Hardik",
  job: "software developer",
})
  .then((res) => {
    console.log("Message from then block", res);
  })
  .catch((err) => {});
