//import fetch from "node-fetch";
import { Client } from "twitter-api-sdk";
const client = new Client(
    "AAAAAAAAAAAAAAAAAAAAAAgUkwEAAAAALfr0Mim%2FxkYpwQePZzcuRZcCoEU%3DXVRQ6grf8UQnuQBIg9QlE8LPOrB8rZKNcp5cDtOdRlJmajsLyg"
); // change to process.env.BEARER_TOKEN

const handler = async function (event, context) {
    try {
        // parse the body sent in the request and extract the tweet link
        let { tweetLink } = JSON.parse(event.body);

        // get id from link: split it by '/', reverse it and pick the first one
        let tweetId = tweetLink.split("/").reverse()[0];

        // get the tweet by it's id
        const response = await client.tweets.findTweetById(tweetId, {
            "tweet.fields": ["text"],
            "media.fields": ["url"],
            "user.fields": [
                "name",
                "profile_image_url",
                "username",
                "verified",
            ],
        });

        // handle errors getting tweet

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        // output to netlify function log
        console.log(error);
        return {
            statusCode: 500,
            // Could be a custom message or object i.e. JSON.stringify(err)
            body: JSON.stringify({ msg: error.message }),
        };
    }
};

export { handler };
