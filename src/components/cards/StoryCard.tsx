import courageImg from "../../static/images/courage.jpeg";
import creativityImg from "../../static/images/creativity.png";
import innovationImg from "../../static/images/innovation.png";

interface IStoryCard {
  priority: number;
}

const StoryCard = ({ priority }: IStoryCard) => {
  return (
    <div className="story-card">
      <img src={courageImg} className="story-card__img" />
      <img src={creativityImg} className="story-card__img" />
      <img src={innovationImg} className="story-card__img" />
      <img src={innovationImg} className="story-card__img" />
    </div>
  );
};

export default StoryCard;
