import './Topics.css';
import Topic from './Topic/index';

function Topics() {
  const topics = [
    { name: 'front end' },
    { name: 'back end' },
    { name: 'database' },
    { name: 'devops' },
    { name: 'AI' },
  ];

  return (
    <>
      <p className="topics_title">내가 선택한 토픽</p>
      <div className="topics_wrap">
        <div className="topic_wrap">
          {topics.map((row) => (
            <Topic {...row} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Topics;
