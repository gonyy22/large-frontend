import api from '../../../../utils/api';
import { useState, useEffect } from 'react';
import './Topics.css';
import Topic from './Topic/index';

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(async () => {
    const response = await api.get('/tags');
    setTopics(response.data);
  }, []);

  return (
    <>
      <p className="topics_title">내가 선택한 토픽</p>
      <div className="topics_wrap">
        <div className="topic_wrap">
          {topics.map((topic) => (
            <Topic name={topic.name}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topics;
