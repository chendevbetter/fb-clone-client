import React from "react";
import TopBar from "../../components/bars/topBar";
import StoryCard from "../../components/cards/StoryCard";
import avatarIcon from "../../static/images/avatar-icon.png";
import groupsIcon from "../../static/images/groups-icon.png";
import PostCard from "../../components/cards/postCard";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile__main">
        <div className="profile__left">
          <section style={{ marginLeft: "2em" }}>
            <img src={avatarIcon} className="top-bar__profile-pic" />
            <img
              src={groupsIcon}
              className="top-bar__profile-pic"
              style={{ display: "block", marginTop: "1em" }}
            />
          </section>
        </div>
        <div className="profile__middle">
          <section className="profile__stories">
            <StoryCard priority={1} />
          </section>
          <section>
            <div className="card1 profile__post-input--container">
              <img src={avatarIcon} className="top-bar__profile-pic" />
              <input
                className="profile__post-input--input"
                type="text"
                placeholder="Whats on your mind, user?"
              />
            </div>
          </section>
          <section className="profile__post-card">
            <PostCard />
          </section>
        </div>
        <div className="profile__right">
          <div className="profile__right__friends">
            <h2 className="profile__right__friends--headline">Your contacts</h2>
            <hr />
            <h2 className="profile__right__friends--second-headline">
              Contacts
            </h2>
            <div className="profile__right__friends--list">
              <img src={avatarIcon} className="top-bar__profile-pic" />
              <h2>Noa Levy</h2>
            </div>
            <div className="profile__right__friends--list">
              <img src={avatarIcon} className="top-bar__profile-pic" />
              <h2>Bianca Kruger</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
