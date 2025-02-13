import MorePost from "./MorePost";
import TopReaded from "./TopReaded";
import Trending from "./Trending";

function Main() {
  return (
    <div className="main">
      <TopReaded />
      <Trending />
      <MorePost />
    </div>
  );
}

export default Main;
