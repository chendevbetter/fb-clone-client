import React, { useEffect, useState } from "react";
import TopBar from "../../components/bars/topBar";
import StoryCard from "../../components/cards/StoryCard";
import avatarIcon from "../../static/images/avatar-icon.png";
import groupsIcon from "../../static/images/groups-icon.png";
import avatar1 from '../../static/images/avatar1.jpeg'
import avatar2 from '../../static/images/avatar2.jpeg'
import avatar3 from '../../static/images/avatar3.jpeg'
import UserPost from "../../components/cards/userPost";
import { useSelector } from "react-redux";
import {returnServerHttpClient} from "../../utils/async-operations";
import { getAllPostsWithUserData } from "../../utils/dbQueries";
import { howLongHasPassed } from "../../utils/datesUtils";


interface IPostAndUserData {
  num_likes: number;
  id: number;
  updated_at: string;
  content: string;
  first_name: string;
  last_name: string;
  img: string;
}

const Profile = () => {
  // @ts-ignore
  const globalStoreState = useSelector((state) => state.auth);
  const [postTxt, setPostTxt] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const { firstName } = globalStoreState;

  useEffect(() => {
    getAllPostsWithUserData().then((res: any) => setUserPosts(res));
  }, []);

  const renderUsersPosts = () => {

    const randomNum = Math.floor(Math.random() * 3) + 1

    return userPosts
      ? userPosts.map((obj: IPostAndUserData) => {
        console.log(obj)
          const elapsedTime = howLongHasPassed(obj.updated_at);
          return (
            <section key={obj.content} className="profile__post-card">
              <UserPost
                img={randomNum === 1 ? avatar1 : randomNum === 2 ? avatar2 : avatar3}
                txt={obj.content}
                name={`${obj.first_name} ${obj.last_name}`}
                timeSincePostPublished={elapsedTime}
                postId={obj.id}
                num_likes={obj.num_likes}
              />
            </section>
          );
        })
      : null;
  };

  const handlePostInp = (e: any) => {
    setPostTxt(e.target.value);
  };

  const handlePublishPost = async () => {
    try {
      const publishPostRes = await returnServerHttpClient().post("posts/create", {
        txt: postTxt,
      });
      if (publishPostRes.status === 200) {
        console.log("post created");
      } else {
        console.log("failed creating post");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TopBar />
      <div className="profile__main">
        <div className="profile__left">
          <section style={{ marginLeft: "2em" }}>
            <img src={avatarIcon} className="top-bar__profile-pic" alt='profile-pic'/>
            <img
                alt='groups'
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
              <img src={avatarIcon} className="top-bar__profile-pic" alt='profile-pic'/>
              <input
                name="post"
                onChange={handlePostInp}
                className="profile__post-input--input"
                type="text"
                placeholder={`Whats on your mind ${firstName || "user"} ?`}
              />
              <button className="btn__primary" onClick={handlePublishPost}>
                Post
              </button>
            </div>
          </section>
          <section className="profile__post-card">{renderUsersPosts()}</section>
        </div>
        <div className="profile__right">
          <div className="profile__right__friends">
            <h2 className="profile__right__friends--headline">Your contacts</h2>
            <hr />
            <h2 className="profile__right__friends--second-headline">
              Contacts
            </h2>
            <div className="profile__right__friends--list">
              <img src={avatarIcon} className="top-bar__profile-pic" alt='profile-pic'/>
              <h2>Noa Levy</h2>
            </div>
            <div className="profile__right__friends--list">
              <img src={avatarIcon} className="top-bar__profile-pic" alt='profile-pic'/>
              <h2>Bianca Kruger</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
