import styles from '../styles/Main.module.css';

const FifthEight = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <label className={styles.label}>
          در صورت استفاده از نرم افزار مالی اطلاعات زیر را تکمیل کنید.
        </label>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            آیا از نرم افزار مالی استفاده میکنید ؟
          </label>
          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="user_accounting_software"
            value="بلی"
            onChange={handleInputChange}
          />

          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="user_accounting_software"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            <div className={styles.biggerAlignLabels}>
              * از چه نرم افزاری استفاده میکنید ؟{' '}
            </div>
          </label>
          <input
            type="text"
            className={styles.input}
            variant="filled"
            value={values.accounting_software_name}
            onChange={handleInputChange}
            name="accounting_software_name"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            * از عملکرد نرم افزار مورد استفاده راضی هستید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="accounting_software_status"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="accounting_software_status"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            <div className={styles.biggerAlignLabels}>
              * برای نرم افزار چه مبلغی پرداخت میکنید ؟{' '}
            </div>
          </label>
          <input
            type="number"
            className={styles.input}
            variant="filled"
            value={values.accounting_software_cost}
            onChange={handleInputChange}
            name="accounting_software_cost"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        {' '}
        <div>
          <label className={styles.label}>
            در صورت نداشتن نرم افزار حسابداری و مالی از قبل تمایل به استفاده از
            یک نرم افزار مناسب و تخصصی برای شغلتان دارید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="accounting_software_want"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="accounting_software_want"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            حاضر به پرداخت چه بودجه ای در قبال دریافت نرم افزار کاربردی مالی
            هستید ؟
          </label>
          <input
            required
            type="number"
            className={styles.input}
            variant="filled"
            value={values.payfor_accounting_software}
            onChange={handleInputChange}
            name="payfor_accounting_software"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              در چه مناطقی فعالیت دارید ؟
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.active_districts}
            onChange={handleInputChange}
            name="active_districts"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            آیا تمایل به فعالیت در مناطق دیگر دارید؟ در صورت تمایل منطقه مورد
            نظر را ذکر کنید .
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.future_districts}
            onChange={handleInputChange}
            name="future_districts"
          />
        </div>
      </div>
    </>
  );
};

export default FifthEight;
