import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostsStore from "./stores/PostsStrore";
import {PostsContext} from "./hooks/usePostsStore";

export const store = new PostsStore();

ReactDOM.render(
    <React.StrictMode>
        <PostsContext.Provider value={store}>
            <App/>
        </PostsContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
