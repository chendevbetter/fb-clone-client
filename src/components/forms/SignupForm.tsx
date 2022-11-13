import { ChangeEvent, MouseEvent, useState } from "react";
import FbWordImg from "../../static/images/fb-word-img.svg";
import Modal from "../modal/Modal";
import CreateAccountForm from "./CreateAccountForm";
import { returnServerHttpClient } from "../../utils/async-operations";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
  };

  const createNewAccount = (e: MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setModalOpen((modalOpen) => !modalOpen);
    }, 300);
  };

  const loginUser = async (e: MouseEvent) => {
    e.preventDefault();
    const httpClient = returnServerHttpClient();
    const authenticationRes = await httpClient.post(
      "auth/login",
      loginFormData
    );
    if (authenticationRes.status === 200) {
      const { id, first_name, last_name } = authenticationRes.data;
      dispatch(login({ id, first_name, last_name }));
      navigate(`/profile`);
    } else {
      console.log("authentication failed");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData((loginFormData) => ({
      ...loginFormData,
      [e.target.name]: e.target.value,
    }));
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
                name="email"
                type="email"
                placeholder="Email or phone numbrer"
                value={loginFormData.email}
                onChange={handleChange}
              />
              <input
                className="signup_form__input"
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={loginFormData.password}
                onChange={handleChange}
              />
              <button
                className="btn btn__primary u__top--small u__center"
                onClick={loginUser}
              >
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
