import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import PostComponent from "./components/PostComponent";
import usePostsStore from "./hooks/usePostsStore";

function App() {
    const postsStore = usePostsStore();

    useEffect(() => {
        postsStore.fetchPosts();
    }, [postsStore]);

  return (
    <div className="App">
        {postsStore.isLoading && "loading"}
        {postsStore.posts.map((post) => <PostComponent id={post.id} />)}
    </div>
  );
}

export default observer(App);
