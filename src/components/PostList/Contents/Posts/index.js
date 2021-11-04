import './Posts.css';
import Post from './Post';

function Posts() {
  const posts = [
    {
      profileImageSrc: 'img/post_img_sample.png',
      author: '욱구',
      title: 'JoGu의 맛집일기',
      tag: 'Jony',
      createdAt: '2018-08-14',
    },
    {
      profileImageSrc: 'img/post_img_sample.png',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'img/post_img_sample.png',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'img/post_img_sample.png',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'img/post_img_sample.png',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
    {
      profileImageSrc: 'img/post_img_sample.png',
      author: '냐냐',
      title: 'Debugging Node.js with pp(pretty-print)',
      tag: 'front-end',
      createdAt: '2021-09-09',
    },
  ];
  return (
    <div className="posts_wrap">
      {posts.map((post) => (
        <Post post={post} />
      ))}
      {/* <Post postData={postData} /> */}
    </div>
  );
}

export default Posts;
