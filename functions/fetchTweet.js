//import fetch from "node-fetch";
import { Client } from "twitter-api-sdk";

let bearerToken = process.env.TWITTER_API_BEARER_TOKEN;
const client = new Client(bearerToken); // change to process.env.BEARER_TOKEN

const handler = async function (event, context) {
    // parse the body sent in the request and extract the tweet link
    let tweetId = event.queryStringParameters.tweetId;

    try {
        // get the tweet by it's id
        const response = await client.tweets.findTweetById(tweetId, {
            expansions: ["author_id"],
            "media.fields": ["url"],
            "user.fields": [
                "name",
                "profile_image_url",
                "username",
                "verified",
            ],
        });

        if (response.data) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    tweetData: response,
                    success: true,
                }),
            };
        }
    } catch (error) {
        const statusCode = error.status;
        let statusText = error.statusText;

        return {
            statusCode: statusCode,
            body: JSON.stringify({
                msg: statusText,
                success: false,
            }),
        };
    }
};

export { handler };
