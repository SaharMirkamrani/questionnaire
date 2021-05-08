import { useState } from 'react';
import styles from '../styles/Main.module.css';

const initialValues = {
  centerName: '',
  centerManager: '',
  phone: '',
  mobilePhone: '',
  website: '',
  email: '',
  address: '',
  position: '',
  name: '',
  surname: '',
  birthDate: '',
  homeAddress: '',
  services: {
    buyAndSell: '',
    mortgageAndRent: '',
    land: '',
    house: '',
    dailyRent: '',
  },
};

const Form = () => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values);

  return (
    <form>
      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نام مرکز : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.company}
              onChange={handleInputChange}
              name="centerName"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}> * نام مدیر مرکز : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.centerManager}
              onChange={handleInputChange}
              name="centerManager"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> * تلفن ثابت : </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}>تلفن همراه : </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.mobilePhone}
              onChange={handleInputChange}
              name="mobilePhone"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> * آدرس سایت : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.website}
              onChange={handleInputChange}
              name="website"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}> * آدرس ایمیل : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}> آدرس : </label>
          <input
            className={styles.longInput}
            variant="filled"
            value={values.address}
            onChange={handleInputChange}
            name="address"
          />
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}> سمت : </label>
          <input
            id="manager"
            type="radio"
            name="position"
            value={values.position}
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="manager">
            مدیر
          </label>

          <input
            id="consultant"
            type="radio"
            name="position"
            value={values.position}
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="consultant">
            مشاور{' '}
          </label>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نام : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}>نام خانوادگی : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.surname}
              onChange={handleInputChange}
              name="surname"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> * تاریخ تولد : </label>
            <input
              placeholder="YYYY/MM/D"
              className={styles.input}
              variant="filled"
              value={values.birthDate}
              onChange={handleInputChange}
              name="birthDate"
            />
          </div>
          <div className={styles.singleInput}>
            <label className={styles.label}> * آدرس محل سکونت : </label>
            <input
              className={styles.longInput}
              variant="filled"
              value={values.homeAddress}
              onChange={handleInputChange}
              name="homeAddress"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نوع خدمات قابل ارایه : </label>
            <label style={{ margin: '0px 10px' }} htmlFor="services">
              خرید و فروش
            </label>
            <input
              type="checkbox"
              value={values.services.buyAndSell}
              onChange={handleInputChange}
              name="buyAndSell"
              id="buyAndSell"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              رهن و اجاره
            </label>
            <input
              type="checkbox"
              value={values.services.mortgageAndRent}
              onChange={handleInputChange}
              name="mortgageAndRent"
              id="mortgageAndRent"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              زمین
            </label>
            <input
              type="checkbox"
              value={values.services.land}
              onChange={handleInputChange}
              name="land"
              id="land"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              ویلا
            </label>
            <input
              type="checkbox"
              value={values.services.house}
              onChange={handleInputChange}
              name="house"
              id="house"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              اجاره روزانه
            </label>
            <input
              type="checkbox"
              value={values.services.dailyRent}
              onChange={handleInputChange}
              name="dailyRent"
              id="dailyRent"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
