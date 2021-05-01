const url = `/.netlify/functions/assetapi`;

fetch(url)
    .then((response) => {
        console.log("response", response);
        return response.json();
    }).then((data) => {
        console.log("the data limra", data);
    }).catch((error) => {
        console.log("error", error);
    })