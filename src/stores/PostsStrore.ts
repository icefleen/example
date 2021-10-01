import Post from "../models/Post";
import {action, computed, makeObservable, observable, runInAction} from "mobx"
import api from "../api/api";

class PostsStore {
    isLoading = false;

    posts: Post[] = [];

    comments: Comment[] = [];

    constructor() {
        makeObservable(this, {
            isLoading: observable,
            posts: observable,
            sortedPosts: computed,
            deletePost: action,
            fetchPosts: action,
        });
    }

    get sortedPosts() {
        return this.posts.sort((a, b) => a.title.localeCompare(b.title));
    }

    deletePost = (id: Post["id"]) => {
        this.posts = this.posts.filter(post => post.id !== id);
    }

    fetchPosts = async () => {
        this.isLoading = true;
        const posts = await api.posts();

        runInAction(() => {
            this.posts = posts;
            this.isLoading = false;
        });
    }
}

export default PostsStore;
