import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const AutoBatchOther = () => {
  console.log("AutoBatchOther");

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false);

  const onClickExecuteApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsFinishApi(true);
      });
  };

  return (
    <div>
      <p>Automatic Batching</p>
      <button onClick={onClickExecuteApi}>API実行</button>
      <p>isFinishApi: {isFinishApi ? "true" : "false"}</p>
      {posts?.map((post) => (
        <>
          <p key={post.id}>{post.title}</p>
          <p>{post.body}</p>
        </>
      ))}
    </div>
  );
};
