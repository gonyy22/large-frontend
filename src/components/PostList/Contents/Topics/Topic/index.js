import './Topic.css';

function Topic(props) {
  return (
    <>
      <button type="button" className="topic_btn">
        {props.name}
      </button>
    </>
  );
}

export default Topic;
