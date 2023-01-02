import { useState } from "react";
import Tweet from "./components/Tweet";
import FakeTweet from "./components/FakeTweet";
import AddTweet from "./components/AddTweet";

function App() {
    const [tweets, setTweets] = useState([]);

    const addTweetToList = (tweetData) => {
        if (tweetData) {
            // map the tweetData
            const { data, includes } = tweetData;

            const tweet = {
                text: data.text,
                user: {
                    name: includes.users[0].name,
                    profile_image_url: includes.users[0].profile_image_url,
                    username: includes.users[0].username,
                },
            };

            setTweets([...tweets, tweet]);
        }
    };

    return (
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
            <div>
                {tweets.map((t, i) => {
                    return <Tweet key={i} tweet={t} />;
                })}
            </div>
            <FakeTweet />
            <AddTweet handleSubmit={addTweetToList} />
        </div>
    );
}

export default App;
