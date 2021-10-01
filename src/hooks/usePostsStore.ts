import React from "react";
import PostsStore from "../stores/PostsStrore";

export const PostsContext = React.createContext<PostsStore | null>(null);

const usePostsStore = () => {
    const store = React.useContext(PostsContext);

    if (!store) throw new Error("sasdasd");

    return store;
}

export default usePostsStore;
