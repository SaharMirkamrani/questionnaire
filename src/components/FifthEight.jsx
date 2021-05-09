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
            name="doTheyUseFinancialSoftware"
            value="بلی"
            onChange={handleInputChange}
          />

          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="doTheyUseFinancialSoftware"
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
            value={values.financialSoftware}
            onChange={handleInputChange}
            name="financialSoftware"
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
            name="areTheySatisfiedWithSoftware"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="areTheySatisfiedWithSoftware"
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
            value={values.howMuchTheyPayForSoftware}
            onChange={handleInputChange}
            name="howMuchTheyPayForSoftware"
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
            name="areTheyWillingToUseSoftware"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="areTheyWillingToUseSoftware"
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
            value={values.budgetToBuySoftware}
            onChange={handleInputChange}
            name="budgetToBuySoftware"
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
            value={values.workAreas}
            onChange={handleInputChange}
            name="workAreas"
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
            value={values.otherPreferedAreas}
            onChange={handleInputChange}
            name="otherPreferedAreas"
          />
        </div>
      </div>
    </>
  );
};

export default FifthEight;
