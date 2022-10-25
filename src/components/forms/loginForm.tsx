import { MouseEvent, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import useBetterForm from '../../hooks/betterUseForm';
import FbWordImg from '../../static/images/fb-word-img.svg';
import { returnHttpClient } from '../../utils/async-operations';
import Modal from '../modal/Modal';
import CreateAccountForm from './CreateAccountForm';

const SignupForm = () => {

const browserHistory = useHistory()

  const [modalOpen, setModalOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const closeModal = () => {
    setModalOpen(false);
  };

  const createNewAccount = (e: MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setModalOpen(modalOpen => !modalOpen);
    }, 300);
  };

  const {
    formData,
    // error,
    handleFormDataChange,
    // handleFocusOut,
  } = useBetterForm({
    email,
    password,
  });

  const login = async (e: any) => {
    e.preventDefault();
    const httpClient = returnHttpClient();
    const loginRes = await httpClient.post('auth/login', formData);
    if (loginRes.status === 200) {
       return browserHistory.push('/')
    }
  };

  return (
    <div className='signup_form__main-container'>
      <div className='signup_form__container u__dynamic-padding--medium'>
        <div className='signup_form__headline-container'>
          <img
            src={FbWordImg}
            className='signup_form__fb-img'
            alt='Facebook logo'
          />
          <p className='signup_form__headline'>
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div>
          <div className='card u__round-borders--medium'>
            <form className='signup_form'>
              <input
                className='signup_form__input signup_form__input--email u__round-borders--medium'
                id='email'
                name='email'
                type='email'
                placeholder='Email or phone numbrer'
                onChange={handleFormDataChange}
              />
              <input
                className='signup_form__input'
                id='password'
                name='password'
                type='password'
                placeholder='password'
                onChange={handleFormDataChange}
              />
              <button
                onClick={login}
                className='btn btn__primary u__top--small u__center'>
                Login
              </button>
              <a
                className='u__center-text u__top--small link__text'
                href='https://forgotpass.com'>
                Forgot password?
              </a>
              <hr className='u__top--medium' />
              <button
                id='create_account_btn'
                onClick={createNewAccount}
                className='btn btn__secondary u__top--small  u__center'>
                Create new account
              </button>
            </form>
          </div>
          <p className='signup_form__footer--para u__top--medium '>
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
