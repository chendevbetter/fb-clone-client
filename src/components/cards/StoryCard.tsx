import courageImg from "../../static/images/courage.jpeg";
import creativityImg from "../../static/images/creativity.png";

interface IStoryCard {
  priority: number;
}

const StoryCard = ({ priority }: IStoryCard) => {
  return (
    <div className="story-card">
      <img src={courageImg} className="story-card__img"  alt='story'/>
      <img src={courageImg} className="story-card__img" alt='story'/>
      <img src={creativityImg} className="story-card__img" alt='story'/>
      <img src={creativityImg} className="story-card__img" alt='story'/>
    </div>
  );
};

export default StoryCard;
