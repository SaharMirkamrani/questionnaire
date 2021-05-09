import styles from '../styles/Main.module.css';

const FourthEight = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              از چه طریقی اطلاع رسانی میکنید ؟{' '}
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.broadcasting_way}
            onChange={handleInputChange}
            name="broadcasting_way"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              آیا با سایت های تبلیغاتی کار میکنید ؟{' '}
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.advertising_websites}
            onChange={handleInputChange}
            name="advertising_websites"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              آیا از پرتال های معرفی مثل دیوار استفاده میکنید ؟{' '}
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.using_divar}
            onChange={handleInputChange}
            name="using_divar"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              از چه سایت هایی برای معرفی فایل ها استفاده میکنید ؟{' '}
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.which_platforms}
            onChange={handleInputChange}
            name="which_platforms"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              جهت جذب مشتری چه تبلیغاتی انجام میدهید ؟{' '}
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.longInput}
            variant="filled"
            value={values.advertising_system}
            onChange={handleInputChange}
            name="advertising_system"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              آیا تمایل دارید برای جذب مشتری بیشتر هزینه کنید ؟{' '}
            </div>
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="more_advertising"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="more_advertising"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              چقدر بودجه تبلیغاتی دارید ؟
            </div>{' '}
          </label>
          <input
            required
            type="number"
            className={styles.input}
            variant="filled"
            value={values.advertising_budget}
            onChange={handleInputChange}
            name="advertising_budget"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              بهترین نوع تبلیغات برای کار شما چیست ؟
            </div>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.best_advertising}
            onChange={handleInputChange}
            name="best_advertising"
          />
        </div>
      </div>
    </>
  );
};

export default FourthEight;
