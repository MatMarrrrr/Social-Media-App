import { useEffect, useState, useCallback } from "react";
import "../../style/Main.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import PostComponent from "./post";

export interface IPost {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

function Main() {
  const [postsList, setPostsList] = useState<IPost[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = useCallback(async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
    );
  }, [postsRef]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="Main">
      {postsList?.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Main;
