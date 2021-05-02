(function() {
    const url = `/.netlify/functions/assetapi`;

    fetch(url).then((response) => {
        console.log("response", response);
        return response.json();
    }).then((data) => {
        console.log("data Study", data);
        console.log("data monitoring", data.data);
    }).catch((err) => {
        console.log("the error", err);
    })
})();