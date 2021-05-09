import styles from '../styles/Main.module.css';

const FirstEight = ({ handleInputChange, values, validatePhone, validateMobilephone, validateEmail }) => {
  console.log(values)
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}> نام مرکز : </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.center_name}
            onChange={handleInputChange}
            name="center_name"
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
            <div className={styles.alignLabels}> * تلفن ثابت : </div>
          </label>
          <input
          
            type="number"
            className={styles.input}
            variant="filled"
            value={values.telephone_number}
            onChange={handleInputChange}
            name="telephone_number"
            onBlur={()=>validatePhone(values.telephone_number)}
          />
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}>تلفن همراه :</div>{' '}
          </label>
          <input
            required
            type="number"
            className={styles.input}
            variant="filled"
            value={values.mobile_number}
            onChange={handleInputChange}
            name="mobile_number"
            onBlur={()=>validateMobilephone(values.mobile_number)}
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
            value={values.website_address}
            onChange={handleInputChange}
            name="website_address"
            placeholder="sample.com"
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
            value={values.email_address}
            onChange={handleInputChange}
            name="email_address"
            onBlur={()=>validateEmail(values.email_address)}
          />
        </div>
      </div>

      <div className={styles.singleInput}>
        <label className={styles.label}>
          {' '}
          <div className={styles.alignLabels}> آدرس : </div>
        </label>
        <input
          required
          className={styles.longInput}
          variant="filled"
          value={values.company_address}
          onChange={handleInputChange}
          name="company_address"
        />
      </div>

      <div className={styles.singleInput}>
        <label className={styles.label}> <div className={styles.alignLabels}> سمت : </div></label>
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
