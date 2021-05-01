const url = "https://d1wpvizvsyhfhp.cloudfront.net/cms/read/en-US";

exports.handler = async function(event, context, callback) {
    const response = await fetch("https://d1wpvizvsyhfhp.cloudfront.net/cms/read/en-US", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.ASSET_API_KEY}`
        },
        body: JSON.stringify({
            query: `{
                listAssets{
                    data{
                      title
                      bedrooms
                    }
                  }
          }`,
        }),
    });

    console.log("the response from limra", response);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    })
}