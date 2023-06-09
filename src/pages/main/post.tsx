import { Post as IPost } from "./main";
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
interface Props {
  post: IPost;
}

function Post(props: Props) {
  const { post } = props;
  const [user] = useAuthState(auth);

  const likesRef = collection(db, "likes");
  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const addLike = async () => {
    await addDoc(likesRef, { user: user?.uid, postId: post.id });
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="postBody">
        <p>{post.description}</p>
      </div>
      <div className="postFooter">
        <p>@{post.username}</p>
        <button onClick={addLike}>&#128077;</button>
        <p>Likes: {}</p>
      </div>
    </div>
  );
}

export default Post;
