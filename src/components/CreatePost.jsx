import { useState } from "react";
import { addPost } from "../utils/firestoreQueries";  // Import the Firestore function
import { auth } from "../firebaseConfig";  // Import auth for user ID

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreatePost = async () => {
        if (!title || !content) {
            alert("Title and content cannot be empty!");
            return;
        }
        try {
            const userId = auth.currentUser?.uid;  // Get logged-in user's ID
            if (!userId) {
                alert("Please log in to create a post!");
                return;
            }

            const postId = await addPost(title, content, userId);  // Call Firestore function
            console.log("Post created with ID:", postId);
            alert("Post created successfully!");

            // Clear input fields after posting
            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Failed to create post:", error.message);
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
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    );
};

export default CreatePost;
