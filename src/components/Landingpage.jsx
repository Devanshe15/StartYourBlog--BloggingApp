import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./Landingpage.css";

const LandingPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const postsArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postsArray);
        };

        fetchPosts();
    }, []);

    return (
        <div className="landing-container">
            <nav>
                <h1>Blog App</h1>
                <Link to="/createpost">
                    <button>Create Post</button>
                </Link>
            </nav>
            <div className="content">
                <h2>Welcome to the Blog App</h2>
                <p>Explore, Read, and Share Your Thoughts on various topics.</p>
            </div>
            <div className="posts">
                <h3>Recent Posts:</h3>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="post">
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </div>
        </div>
    );
};

export default LandingPage;
