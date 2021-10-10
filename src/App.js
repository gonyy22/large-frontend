import { Route } from "react-router";
import PostList from "./pages/PostList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={PostList} />
    </div>
  );
}

export default App;
