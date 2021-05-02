const fetch = require('node-fetch');
exports.handler = async function(event, context, callback) {

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
    const uri = `https://d1wpvizvsyhfhp.cloudfront.net/cms/read/en-US`;

    console.log("the url", uri);

    fetch(uri, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer a71230612484f77f14bc9621bbd8736da89d0e5fc684abdc'
            }
        }).then(res => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(res.data)
            })
        })
        .catch(err => {
            console.log(err)
            callback(err, {
                statusCode: 500,
                body: JSON.stringify({
                    "message": "Bad request"
                })
            });
        })




}