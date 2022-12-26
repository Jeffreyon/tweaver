import { useEffect, useState } from "react";
import "./App.css";
import { Client } from "twitter-api-sdk";

const client = new Client("token");

function App() {
    const [tweet, setTweet] = useState("");
    const [tweetLink, setTweetLink] = useState("");

    const fetchTweet = async (tweetLink) => {
        // get id from link, split it by '/', reverse it and pick the first one
        let tweetId = tweetLink.split("/").reverse()[0];
        console.log(tweetId);

        // get tweet from client
        let tweet = await client.tweets.findTweetsById(tweetId, {
            "tweet.fields": ["text"],
            "media.fields": ["url"],
            "user.fields": [
                "name",
                "profile_image_url",
                "username",
                "verified",
            ],
        });

        // return tweet as json
        return tweet.data.text;
    };

    useEffect(() => {
        let tweeData = async () => await fetchTweet(tweetLink);
        setTweet(tweeData);
    }, [tweetLink]);

    const handleChange = (link) => {
        setTweetLink(link);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter tweet link"
                value={tweetLink}
                onChange={(e) => handleChange(e.target.value)}
            />
            <div>
                <p>Tweet details</p>
                <p>{tweet}</p>
            </div>
        </div>
    );
}

export default App;
