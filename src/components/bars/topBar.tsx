import FbLogo from "../../static/images/fb-icon-svg.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../static/images/magnifying-glass.svg";
import videoPlayerIcon from "../../static/images/video-player-icon.png";
import marketplace from "../../static/images/online-store-icon.png";
import groupsIcon from "../../static/images/groups-icon.png";
import gamingIcon from "../../static/images/gaming-icon.png";
import homeIcon from "../../static/images/home-icon.png";
import nineDotsIcon from "../../static/images/9dots-icon.png";
import bellIcon from "../../static/images/bell-icon.png";
import messangerIcon from "../../static/images/messenger-icon.png";
import avatarIcon from "../../static/images/avatar-icon.png";

const TopBar = () => {
  return (
    <div className="top-bar__main">
      <div className="top-bar__left">
        <img src={FbLogo} />
        <div className="top-bar__left__search-box">
          <MagnifyingGlassIcon className="top-bar__left__magnifying-glass" />
          <input
            className="top-bar__left__search-box--input"
            type="text"
            placeholder="Search Facebook"
            name="search-fb"
          />
        </div>
      </div>
      <div className="top-bar__middle">
        <img src={homeIcon} className="top-bar__middle__icons" />
        <img src={videoPlayerIcon} className="top-bar__middle__icons" />
        <img src={marketplace} className="top-bar__middle__icons" />
        <img src={groupsIcon} className="top-bar__middle__icons" />
        <img src={gamingIcon} className="top-bar__middle__icons" />
      </div>
      <div className="top-bar__right">
        <div className="gray-circle">
          <img src={nineDotsIcon} className="gray-circle__img" />
        </div>
        <div className="gray-circle">
          <img src={bellIcon} className="gray-circle__img" />
        </div>
        <div className="gray-circle">
          <img src={messangerIcon} className="gray-circle__img" />
        </div>
        <img src={avatarIcon} className="top-bar__profile-pic" />
      </div>
    </div>
  );
};

export default TopBar;
