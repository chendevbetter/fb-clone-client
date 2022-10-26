import nineDotsIcon from "../../static/images/9dots-icon.png";
import bellIcon from "../../static/images/bell-icon.png";
import messangerIcon from "../../static/images/messenger-icon.png";

const mapIconNameToIcon = (iconName: string) => {
  switch (iconName) {
    case "9dots":
      return nineDotsIcon;
    default:
      return "";
  }
};

interface IGrayCircleWithIcon {
  icon: string;
}

const GrayCircleWithIcon = ({ icon }: IGrayCircleWithIcon) => {
  return (
    <div className="gray-circle">
      <img src={mapIconNameToIcon(icon)} className="gray-circle__img" />
    </div>
  );
};

export default GrayCircleWithIcon;
