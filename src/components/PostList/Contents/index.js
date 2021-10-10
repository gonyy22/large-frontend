import Posts from "./Posts";
import Topics from "./Topics";
import './Contents.css';

function Contents() {
  return (
    <div className="Contents_wrap">
      <Topics />
      <Posts />
    </div>
  );
}

export default Contents;
