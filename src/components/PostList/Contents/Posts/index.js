import './Posts.css';
import Post from './Post';

function Posts() {
  const posts = [
    {
      profileImageSrc: 'abc',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'abc',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'abc',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'abc',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'abc',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'abc',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
  ];
  console.log(posts);
  return (
    <div className="posts_wrap">
      <Post />
    </div>
  );
}

export default Posts;
