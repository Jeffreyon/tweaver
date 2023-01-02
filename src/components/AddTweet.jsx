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
                className="py-2 px-4 bg-slate-200"
            />
            <button
                onClick={handleClick}
                className="p-2 bg-blue-500 text-white">
                Add Tweet
            </button>
        </div>
    );
}
