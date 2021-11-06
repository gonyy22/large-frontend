import { useEffect, useState } from 'react';

import './Posts.css';
import Post from './Post';
import api from '../../../../utils/api';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = await api.get('/posts');
    setPosts(response.data);
  }, [posts]);

  return (
    <div className="posts_wrap">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;
