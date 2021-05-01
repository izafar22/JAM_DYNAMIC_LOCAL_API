const url = `/.netlify/functions/assetapi`;

fetch(url)
    .then((response) => {
        console.log("response", response.data);
        return response.data;
    }).catch((error) => {
        console.log("error", error);
    })