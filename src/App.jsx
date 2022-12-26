import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [tweet, setTweet] = useState("");
    const [tweetLink, setTweetLink] = useState(undefined);

    let url = "/.netlify/functions/fetchTweet";
    let fetchData = async () => {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                tweetLink: tweetLink,
            }),
        });

        let { data } = await response.json();

        /* let parsed = await response.json();

        //let { data } = await response.json();
        //setTweet(data.text);
        console.log(parsed); */
        setTweet(data.text);
    };
    useEffect(() => {
        if (tweetLink) {
            fetchData();
        }
    }, [tweetLink]);

    const handleChange = (link) => {
        setTweetLink(link);
    };

    return (
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
    );
}

export default App;
