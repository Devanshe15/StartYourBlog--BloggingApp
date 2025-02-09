import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const db = getFirestore(); // Initialize Firestore

// ✅ Add a new post to Firestore
export const addPost = async (title, content, userId) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title,
            content,
            userId,
            timestamp: new Date(),
        });
        console.log("Post added with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};

// ✅ Get all posts from Firestore
export const getAllPosts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

// ✅ Update a post in Firestore
export const updatePost = async (postId, updatedData) => {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, updatedData);
        console.log("Post updated:", postId);
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
};

// ✅ Delete a post from Firestore
export const deletePost = async (postId) => {
    try {
        await deleteDoc(doc(db, "posts", postId));
        console.log("Post deleted:", postId);
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};
