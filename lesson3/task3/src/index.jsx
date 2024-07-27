import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  //   avatarUrl: 'https://avatars1.githubsercontent.com',
  avatarUrl:
    'https://flomaster.top/o/uploads/posts/2023-11/1700141858_flomaster-top-p-multyashnii-risunok-kozi-narisovannie-temp-3.jpg',
};

ReactDOM.render(<Comment user={userInfo} />, rootElement);
