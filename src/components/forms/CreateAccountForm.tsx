import { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/js/all";

import DropDown from "../../shared/dropdown";
import { returnObjWithRandomKey } from "../../utils/dataUtils";
import DynamicDaysDropdown from "../../shared/dynamicDateDropDown";
import { returnMonthsList } from "../../static/data/staticDatesData";
import { FB_MINIMUM_USE_AGE } from "../../static/data/staticGeneralData";
import TooltipModal from "../modal/TooltipModal";
import {
  BIRTHDAY_TOOLTIP_MSG,
  GENDER_TOOLTIP_MSG,
} from "../../messages/explanations";
import { ClickoutsideHook } from "../../hooks/eventHooks";
import {
  returnHttpClient,
  performSetStateAfterXSeconds,
} from "../../utils/async-operations";
import { replaceCssClass } from "../../utils/cssUtils";
import RadioBtn from "../../shared/Buttons/RadioBtn";
import PrimaryBtn from "../../shared/Buttons/PrimaryBtn";
import useForm from "../../hooks/useForm";
import { Egender } from "../../types/enums";
import { normalizeDate } from "../../utils/normalization";

type createAccountFormProps = {
  closeModal: () => void;
};

const returnYearsList = () => {
  const years = [];
  const currentYear = new Date().getFullYear() - FB_MINIMUM_USE_AGE;
  for (let i = currentYear; i > currentYear - 100; i--) {
    const item = returnObjWithRandomKey("year", i);
    years.push(item);
  }
  return years;
};

const yearsArr = returnYearsList();

const getMonths = () => {
  const monthsList = returnMonthsList();
  const months = [];
  for (let i = 0; i < monthsList.length; i++) {
    const item = returnObjWithRandomKey("month", monthsList[i]);
    months.push(item);
  }
  return months;
};

const monthsArr = getMonths();

const CreateAccountForm = ({ closeModal }: createAccountFormProps) => {
  const [currentMonth, setCurrentMonth] = useState(
    monthsArr[new Date().getMonth()].key
  );
  const [currentYear, setCurrentYear] = useState<string | number>(
    new Date().getFullYear()
  );

  const [birthdayTooltipOpen, setBirthdayTooltipOpen] = useState(false);
  const [genderTooltipOpen, setGenderTooltipOpen] = useState(false);

  let birthdayRef = useRef<HTMLDivElement>(null);
  let genderRef = useRef<HTMLDivElement>(null);

  const handler = (op: string, tooltip: string) => {
    switch (tooltip) {
      case "birthdayTooltip":
        if (op === "open") {
          return setBirthdayTooltipOpen(true);
        } else {
          console.log("closing");
          replaceCssClass(
            "birthdayTooltip",
            "u__appear-opacity__short",
            // adding disappear makes it jump
            "u__disappear-opacity__short"
          );
          return performSetStateAfterXSeconds(
            setBirthdayTooltipOpen,
            false,
            0.3
          );
        }
      case "genderTooltip":
        if (op === "open") {
          setGenderTooltipOpen(true);
        } else {
          replaceCssClass(
            "genderTooltip",
            "u__appear-opacity__short",
            "u__disappear-opacity__short"
          );
          return performSetStateAfterXSeconds(setGenderTooltipOpen, false, 0.3);
        }
    }
  };

  ClickoutsideHook(birthdayRef, handler, "birthdayTooltip");
  ClickoutsideHook(genderRef, handler, "genderTooltip");

  const {
    formData,
    error,
    handleFormDataChange,
    handleDataChangeFromNonInput,
    handleFocusOut,
    // handleEmailOrPassordChange,
  } = useForm({
    firstName: "",
    lastName: "",
    emailOrNumber: "",
    password: "",
    "birthday-day": "",
    "birthday-month": "",
    "birthday-year": "",
    gender: Egender.custom,
  });

  const handleSignup = async () => {
    const httpClient = returnHttpClient();
    const { firstName, lastName, emailOrNumber, password, gender } = formData;
    const birthdayDate = normalizeDate(
      formData["birthday-day"],
      formData["birthday-month"],
      formData["birthday-year"]
    );
    const data = {
      firstName,
      lastName,
      emailOrNumber,
      password,
      birthdayDate,
      gender,
    };
    await httpClient.post("auth/signup", data);
  };

  return (
    // make card a component
    <div className="card">
      <h1>Sign up</h1>
      <p>It's quick and easy.</p>
      <div className="card__close-btn">
        <img
          className="signup_form__close-btn"
          onClick={closeModal}
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
          alt=""
        />
      </div>
      <hr />
      <div className="create-account__inputs">
        <div className="create-account__inputs__name">
          <div style={{ width: "100%" }}>
            <input
              value={formData.firstName}
              onChange={handleFormDataChange}
              name="firstName"
              className="create-account__input"
              type="text"
              placeholder="First name"
              autoFocus
              onBlur={handleFocusOut}
            />
            {error && <p>{error.firstName}</p>}
          </div>
          <div style={{ width: "100%" }}>
            <input
              value={formData.lastName}
              onChange={handleFormDataChange}
              name="lastName"
              className="create-account__input"
              type="text"
              placeholder="Last name"
              onBlur={handleFocusOut}
            />
            {error && <p>{error.lastName}</p>}
          </div>
        </div>
        <input
          value={formData.emailOrNumber}
          onChange={handleFormDataChange}
          name="emailOrNumber"
          className="create-account__input"
          type="text"
          placeholder="Mobile number or email"
        />
        <input
          value={formData.password}
          onChange={handleFormDataChange}
          name="password"
          className="create-account__input"
          type="password"
          placeholder="New password"
        />
      </div>
      <div className="create-account__dropdowns--headline u__top--small">
        <p>birthday</p>
        <div ref={birthdayRef}>
          <span className="u__left--tiny u__pointer u__bold--extra">?</span>
          {birthdayTooltipOpen && (
            <TooltipModal id="birthdayTooltip" content={BIRTHDAY_TOOLTIP_MSG} />
          )}
        </div>
      </div>
      <div className="create-account__dropdowns__container u__top--tiny">
        <DynamicDaysDropdown
          setData={handleDataChangeFromNonInput}
          name="birthday-day"
          year={currentYear}
          month={currentMonth}
        />
        <DropDown
          setData={handleDataChangeFromNonInput}
          name="birthday-month"
          styleClass="u__left--small"
          data={monthsArr}
          currentDate={currentMonth}
        ></DropDown>
        <DropDown
          setData={handleDataChangeFromNonInput}
          name="birthday-year"
          styleClass="u__left--small"
          data={yearsArr}
        ></DropDown>
      </div>
      <div className="create-account__dropdowns--headline u__top--small">
        <p>Gender</p>
        <div ref={genderRef}>
          <span className="u__left--tiny u__pointer u__bold--extra">?</span>
          {genderTooltipOpen && (
            <TooltipModal id="genderTooltip" content={GENDER_TOOLTIP_MSG} />
          )}
        </div>
      </div>
      <div className="create-account__radio-btns__container u__top--tiny">
        <RadioBtn
          label="Female"
          name="gender"
          value="female"
          onChange={handleFormDataChange}
        />
        <RadioBtn
          styleClass="u__left--small"
          name="gender"
          label="Male"
          value="male"
          onChange={handleFormDataChange}
        />
        <RadioBtn
          styleClass="u__left--small"
          name="gender"
          label="Custom"
          value="custom"
          onChange={handleFormDataChange}
        />
      </div>
      <p className="create-account__footer">
        By clicking Sign Up, you agree to our{" "}
        <a href="https://www.facebook.com/legal/terms/update">Terms,</a>{" "}
        <a href="https://www.facebook.com/about/privacy/update">Data Policy</a>
        and{" "}
        <a href="https://www.facebook.com/policies/cookies/">
          Cookies Policy.
        </a>{" "}
        You may receive SMS Notifications from us and can opt out any time.
      </p>
      <PrimaryBtn
        text="Sign up"
        type="primary-green"
        styleClass="u__top--small u__center"
        onClick={handleSignup}
        // disable if validation error is not empty
        // disabled={}
      />
    </div>
  );
};

export default CreateAccountForm;
