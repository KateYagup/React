import React from "react";
import Comment from "./Comment";

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/9919?v=4',
    //   avatarUrl:
    //     'https://flomaster.top/o/uploads/posts/2023-11/1700141858_flomaster-top-p-multyashnii-risunok-kozi-narisovannie-temp-3.jpg',
};

const App = () => {
    return (
        <Comment
            user={userInfo}
            text="Good job!"
            date={new Date('2019-01-01T11:32:19.566Z')}
        />
    )
}

export default App;