import Post from "../models/Post";
import Comment from "../models/Comment";

const api = {
    async posts(): Promise<Post[]> {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("");
        }
    },

    async comments(): Promise<Comment[]> {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("");
        }
    }
}

export default api;