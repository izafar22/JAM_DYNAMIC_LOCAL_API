//const fetch = require("node-fetch");
const ApolloClient = require('@apollo-boost').ApolloClient;
let gql = require('@apollo-boost').gql;
const uri = "https://d1wpvizvsyhfhp.cloudfront.net/cms/read/en-US";
exports.handler = async function(event, context, callback) {
    const client = new ApolloClient({
        uri,
        Authorization: "Bearer a71230612484f77f14bc9621bbd8736da89d0e5fc684abdc"
    });

    const query = gql `
                    query {
                        listAssets {
                            data {
                                title
                                bedrooms
                            }
                        }
                    }
                    `;

    console.log("the limra response");

    client
        .query({ query })
        .then((response) => {
            console.log("the response came", response);
            console.log("the response came with data", response.data);
            return `
                    total_Assets: $ { response.data }
                    `;
        })
        .then(console.log)
        .catch(console.error);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: "data"
        })
    })
}