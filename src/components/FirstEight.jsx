import styles from '../styles/Main.module.css';
import { useState } from 'react';
import ValidationError from './ValidationError';

const FirstEight = ({ handleInputChange, values }) => {
  const [phoneError, setPhoneError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validatePhone = (input) => {
    let phone = /^\d{8}$/;
    if (input.match(phone)) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }
  };

  const validateMobilephone = (input) => {
    let mobile = /^\d{11}$/;
    if (mobile.test(input)) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }
  };

  const validateEmail = (mail) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      setEmailError(false);
      return true;
    }
    setEmailError(true);
  };

  console.log(values);
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}>
              {' '}
              نام مرکز <div style={{ color: 'red', display: 'inline' }}>
                *
              </div>{' '}
              :{' '}
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            value={values.center_name}
            onChange={handleInputChange}
            name="center_name"
          />
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> نام مدیر مرکز :</div>{' '}
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.center_admin}
            onChange={handleInputChange}
            name="center_admin"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> تلفن ثابت : </div>
          </label>
          <input
            type="number"
            className={styles.input}
            value={values.telephone_number}
            onChange={handleInputChange}
            name="telephone_number"
            onBlurCapture={() => validatePhone(values.telephone_number)}
          />
          {phoneError && (
            <ValidationError text={'شماره تلفن باید 8 رقم باشد.'} />
          )}
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}>
              تلفن همراه{' '}
              <div style={{ color: 'red', display: 'inline' }}>*</div> :
            </div>{' '}
          </label>
          <input
            required
            type="number"
            className={styles.input}
            value={values.mobile_number}
            onChange={handleInputChange}
            name="mobile_number"
            onBlurCapture={() => validateMobilephone(values.mobile_number)}
          />
          {mobileError && (
            <ValidationError text={'شماره موبایل باید 11 رقم باشد.'} />
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> آدرس سایت : </div>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.website_address}
            onChange={handleInputChange}
            name="website_address"
            placeholder="sample.com"
          />
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> آدرس ایمیل :</div>{' '}
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.email_address}
            onChange={handleInputChange}
            name="email_address"
            onBlurCapture={() => validateEmail(values.email_address)}
          />
          {emailError && (
            <ValidationError text={'لطفا ایمیل معتبر وارد کنید.'} />
          )}
        </div>
      </div>

      <div className={styles.singleInput}>
        <label className={styles.label}>
          {' '}
          <div className={styles.alignLabels}>
            {' '}
            آدرس <div style={{ color: 'red', display: 'inline' }}>*</div> :{' '}
          </div>
        </label>
        <input
          required
          className={styles.longInput}
          value={values.company_address}
          onChange={handleInputChange}
          name="company_address"
        />
      </div>

      <div className={styles.singleInput}>
        <label className={styles.label}>
          {' '}
          <div className={styles.alignLabels}>
            {' '}
            سمت <div style={{ color: 'red', display: 'inline' }}>*</div> :{' '}
          </div>
        </label>
        <label style={{ margin: '0px 10px' }} htmlFor="manager">
          مدیر
        </label>
        <input
          id="manager"
          type="radio"
          name="job_title"
          value="مدیر"
          onChange={handleInputChange}
        />

        <label style={{ margin: '0px 10px' }} htmlFor="consultant">
          مشاور{' '}
        </label>
        <input
          id="consultant"
          type="radio"
          name="job_title"
          value="مشاور"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default FirstEight;
