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
            value={values.adAdpproach}
            onChange={handleInputChange}
            name="adAdpproach"
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
            value={values.workWithAdWebsites}
            onChange={handleInputChange}
            name="workWithAdWebsites"
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
            value={values.doTheyUsePortals}
            onChange={handleInputChange}
            name="doTheyUsePortals"
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
            value={values.whatSitesTheyUse}
            onChange={handleInputChange}
            name="whatSitesTheyUse"
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
            value={values.toAttractsClients}
            onChange={handleInputChange}
            name="toAttractsClients"
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
            value={values.budgetForAd}
            onChange={handleInputChange}
            name="budgetForAd"
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
