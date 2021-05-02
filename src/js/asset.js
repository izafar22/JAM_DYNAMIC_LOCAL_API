const data = JSON.stringify({
    query: `{
            listAssets {
                data {
                    title
                    bedrooms
                }
            }
}`,
});

fetch(
        'https://d1wpvizvsyhfhp.cloudfront.net/cms/read/en-US', {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                Authorization: 'Bearer a71230612484f77f14bc9621bbd8736da89d0e5fc684abdc',
            },
        }
    ).then((response) => {
        console.log("the response", response);
        return response.json();
    }).then((data) => {
        console.log("data limra", data.data);
    })
    .catch((error) => {
        console.log("error", error);
    })