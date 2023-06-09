import { Post as IPost } from "./main";
interface Props {
  post: IPost;
}

function Post(props: Props) {
  const { post } = props;
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
        <button>&#128077;</button>
      </div>
    </div>
  );
}

export default Post;
