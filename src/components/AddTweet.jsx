import React, { useState } from "react";
import getTweet from "./getTweet";

export default function AddTweet({ handleSubmit }) {
    const [tweetLink, setTweetLink] = useState("");

    const handleChange = (e) => {
        setTweetLink(e.target.value);
    };

    const handleClick = async () => {
        // get tweet from api
        const [data, error] = await getTweet(tweetLink);

        // check if there're any errors and act
        if (error) {
            console.log(error);
            return handleSubmit(null);
        } else if (data) {
            return handleSubmit(data);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter tweet link"
                onChange={handleChange}
                value={tweetLink}
            />
            <button onClick={handleClick}>Add Tweet</button>
        </div>
    );
}
