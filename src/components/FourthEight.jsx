import styles from '../styles/Main.module.css';

const FourthEight = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            {' '}
            از چه طریقی اطلاع رسانی میکنید ؟{' '}
          </label>
          <input
            type="text"
            className={styles.input}
            variant="filled"
            value={values.adAdpproach}
            onChange={handleInputChange}
            name="adAdpproach"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            {' '}
            آیا با سایت های تبلیغاتی کار میکنید ؟{' '}
          </label>
          <input
            type="text"
            className={styles.input}
            variant="filled"
            value={values.workWithAdWebsites}
            onChange={handleInputChange}
            name="workWithAdWebsites"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            {' '}
            آیا از پرتال های معرفی مثل دیوار استفاده میکنید ؟{' '}
          </label>
          <input
            type="text"
            className={styles.input}
            variant="filled"
            value={values.doTheyUsePortals}
            onChange={handleInputChange}
            name="doTheyUsePortals"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            {' '}
            از چه سایت هایی برای معرفی فایل ها استفاده میکنید ؟{' '}
          </label>
          <input
            type="text"
            className={styles.input}
            variant="filled"
            value={values.whatSitesTheyUse}
            onChange={handleInputChange}
            name="whatSitesTheyUse"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            {' '}
            جهت جذب مشتری چه تبلیغاتی انجام میدهید ؟{' '}
          </label>
          <input
            type="text"
            className={styles.longInput}
            variant="filled"
            value={values.toAttractsClients}
            onChange={handleInputChange}
            name="toAttractsClients"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            {' '}
            آیا تمایل دارید برای جذب مشتری بیشتر هزینه کنید ؟{' '}
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="wantToPayMoreForAttractingClients"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="wantToPayMoreForAttractingClients"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}> چقدر بودجه تبلیغاتی دارید ؟ </label>
          <input
            type="number"
            className={styles.input}
            variant="filled"
            value={values.budgetForAd}
            onChange={handleInputChange}
            name="budgetForAd"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            بهترین نوع تبلیغات برای کار شما چیست ؟
          </label>
          <input
            type="text"
            className={styles.input}
            variant="filled"
            value={values.bestWayToAd}
            onChange={handleInputChange}
            name="bestWayToAd"
          />
        </div>
      </div>
    </>
  );
};

export default FourthEight;
