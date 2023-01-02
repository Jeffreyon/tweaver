import { useEffect, useState } from "react";
import "./App.css";
import Tweet from "./Tweet";
import AddTweet from "./components/AddTweet";

function App() {
    const [tweet, setTweet] = useState("");

    const addTweetToList = (tweetData) => {
        if (tweetData) {
            console.log(tweetData);
        }
    };
    /* return (
        <div>
            <input
                type="text"
                placeholder="Enter tweet link"
                onChange={(e) => handleChange(e.target.value)}
            />
            <div>
                <p>Tweet details</p>
                <p>{tweet}</p>
            </div>
        </div>
    ); */

    //return <Tweet  />;
    return <AddTweet handleSubmit={addTweetToList} />;
}

export default App;
