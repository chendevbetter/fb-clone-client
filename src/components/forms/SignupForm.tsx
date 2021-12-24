import { MouseEvent, useEffect, useState } from "react";
import FbWordImg from "../../static/images/fb-word-img.svg";
import Modal from "../modal/Modal";
import CreateAccountForm from "./CreateAccountForm";

const SignupForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const createNewAccount = (e: MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setModalOpen((modalOpen) => !modalOpen);
    }, 300);
  };

  return (
    <div className="signup_form__main-container">
      <div className="signup_form__container u__dynamic-padding--medium">
        <div className="signup_form__headline-container">
          <img
            src={FbWordImg}
            className="signup_form__fb-img"
            alt="Facebook logo"
          />
          <p className="signup_form__headline">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div>
          <div className="card u__round-borders--medium">
            <form className="signup_form">
              <input
                className="signup_form__input signup_form__input--email u__round-borders--medium"
                id="email"
                type="email"
                placeholder="Email or phone numbrer"
              />
              <input
                className="signup_form__input"
                id="password"
                type="password"
                placeholder="password"
              />
              <button className="btn btn__primary u__top--small u__center">
                Login
              </button>
              <a
                className="u__center-text u__top--small link__text"
                href="https://forgotpass.com"
              >
                Forgot password?
              </a>
              <hr className="u__top--medium" />
              <button
                id="create_account_btn"
                onClick={createNewAccount}
                className="btn btn__secondary u__top--small  u__center"
              >
                Create new account
              </button>
            </form>
          </div>
          <p className="signup_form__footer--para u__top--medium ">
            <b>Create a Page</b> for a celebrity, band or business.
          </p>
        </div>
        {modalOpen && (
          <Modal>
            <CreateAccountForm closeModal={closeModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
