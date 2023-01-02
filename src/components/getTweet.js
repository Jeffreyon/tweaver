export default async function getTweet(tweetLink) {
    // get id from link: split it by '/', reverse it and pick the first one
    let tweetId = tweetLink.split("/").reverse()[0];

    const endpoint = `/.netlify/functions/fetchTweet?tweetId=${tweetId}`;

    let response = await fetch(endpoint);
    let data = await response.json();

    if (data.success) {
        // get the tweet data and return it with no errors
        const tweetData = data.tweetData;
        return [tweetData, null];
    } else {
        // get the error message and return it with no tweet data
        const error = data.msg;
        return [null, error];
    }
}
