import { useState } from "react";
import { db, auth } from "../firebaseConfig"; // Import Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore functions

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreatePost = async () => {
        if (!title || !content) {
            alert("Title and Content cannot be empty!");
            return;
        }

        try {
            await addDoc(collection(db, "posts"), {
                title,
                content,
                author: auth.currentUser?.displayName || "Anonymous",
                createdAt: serverTimestamp(),
            });

            alert("Post Created Successfully!");
            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Write your post..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    );
};

export default CreatePost;
