import React from 'react';
import Post from "../models/Post";
import {observer} from "mobx-react-lite";
import usePostsStore from "../hooks/usePostsStore";

type Props = {
    id: number;
}

const PostComponent = ({id}: Props) => {
    const postsStore = usePostsStore();

    const post = postsStore.posts.find(post => post.id === id) as Post;

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default observer(PostComponent);