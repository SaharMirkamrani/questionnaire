import styles from '../styles/Main.module.css';

const FirstEight = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> نام مرکز : </div>
          </label>
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
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> * نام مدیر مرکز :</div>{' '}
          </label>
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
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> * تلفن ثابت : </div>
          </label>
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
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}>تلفن همراه :</div>{' '}
          </label>
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
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> * آدرس سایت : </div>
          </label>
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
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> * آدرس ایمیل :</div>{' '}
          </label>
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
        <label className={styles.label}>
          {' '}
          <div className={styles.alignLabels}> آدرس : </div>
        </label>
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
        <label style={{ margin: '0px 10px' }} htmlFor="manager">
          مدیر
        </label>
        <input
          id="manager"
          type="radio"
          name="position"
          value="مدیر"
          onChange={handleInputChange}
        />

        <label style={{ margin: '0px 10px' }} htmlFor="consultant">
          مشاور{' '}
        </label>
        <input
          id="consultant"
          type="radio"
          name="position"
          value="مشاور"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default FirstEight;
