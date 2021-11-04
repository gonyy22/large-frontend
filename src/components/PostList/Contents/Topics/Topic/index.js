import './Topic.css';

function Topic(props) {
  const { name } = props;
  return (
    <>
      <button type="button" className="topic_btn">
        {name}
      </button>
    </>
  );
}

export default Topic;
