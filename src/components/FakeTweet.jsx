import Tweet from "./Tweet";
import profileImage from "../assets/profile.jpeg";

const fakeTweet = {
    text: "Lorem ipsum dolor sit amet that is the only one i know",
    user: {
        name: "Jeffrey Onuigbo",
        profile_image_url: profileImage,
        username: "jeffreyon",
    },
};

function FakeTweet() {
    return <Tweet tweet={fakeTweet} />;
}

export default FakeTweet;
