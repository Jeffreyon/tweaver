function Tweet({ tweet }) {
    const { text, user } = tweet;
    return (
        <div className="p-4 border border-slate-200 max-w-sm">
            <div className="flex items-center">
                <div className=" h-12 w-12 object-contain overflow-hidden rounded-full">
                    <img
                        src={user.profile_image_url}
                        alt="Profile image"
                        className=""
                    />
                </div>
                <div className=" ml-3">
                    <p className=" font-semibold">{user.name}</p>
                    <p className=" text-slate-500 text-sm">@{user.username}</p>
                </div>
            </div>
            <div className=" text-xl mt-4">{text}</div>
        </div>
    );
}

export default Tweet;
