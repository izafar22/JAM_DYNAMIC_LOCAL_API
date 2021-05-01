const url = `/.netlify/functions/assetapi`;

fetch(url)
    .then((response) => {
        console.log("response", response);
        return response;
    })