import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  console.log("아이디: ", id);

  const [post, setPost] = useState({});

  // 해당 데이터를 가지고 오기
  // https://jsonplaceholder.typicode.com/posts/100

  // useEffect 로 데이터 불러오는 initState
  useEffect(() => {
    console.log(`최초로 아이디 ${id}인 포스터 불러오기`);
    const getPostData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const post = response.json();
      return post;
    };

    getPostData().then(setPost).catch(console.error);
  }, []);

  const postComponent = (
    <div>
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
    </div>
  );

  return postComponent;
};

export default Post;
