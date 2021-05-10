import styles from '../styles/Main.module.css';

const ThirdTen = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}> خدمات دیگر (توضیح دهید) : </label>
          <input
            type="text"
            className={styles.longInput}
            value={values.services_description}
            onChange={handleInputChange}
            name="services_description"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}> ساعت کاری از </div>{' '}
          </label>
          <input
            type="number"
            className={styles.shortInput}
            value={values.job_hour_start}
            onChange={handleInputChange}
            name="job_hour_start"
            max="24"
            min="1"
          />
          <label className={styles.label}>{'تا'}</label>
          <input
            type="number"
            className={styles.shortInput}
            value={values.job_hour_end}
            onChange={handleInputChange}
            name="job_hour_end"
            max="24"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              ساعت پاسخگویی از
            </div>{' '}
          </label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.suport_hour_start}
            onChange={handleInputChange}
            name="suport_hour_start"
            max="24"
            min="1"
          />
          <label className={styles.label}>{'تا'}</label>
          <input
            type="number"
            className={styles.shortInput}
            value={values.suport_hour_end}
            onChange={handleInputChange}
            name="suport_hour_end"
            max="24"
            min="1"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              تعداد مشاور حاضر در محل
            </div>{' '}
          </label>
          <input
            type="number"
            className={styles.shortInput}
            value={values.advisors_count}
            onChange={handleInputChange}
            name="advisors_count"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              تعداد مشاور غیر حضوری{' '}
            </div>
          </label>
          <input
            type="number"
            className={styles.shortInput}
            value={values.remoteadvisors}
            onChange={handleInputChange}
            name="remoteadvisors"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              تعداد مراجعین حضوری در روز{' '}
              <div style={{ color: 'red', display: 'inline' }}>*</div>
            </div>
          </label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.onboard_customer_count}
            onChange={handleInputChange}
            name="onboard_customer_count"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              تعداد مراجعین غیر حضوری در روز{' '}
              <div style={{ color: 'red', display: 'inline' }}>*</div>
            </div>
          </label>
          <input
            required
            type="number"
            className={styles.shortInput}
            value={values.remote_customer_count}
            onChange={handleInputChange}
            name="remote_customer_count"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              تعداد مراجعین مربوط به خرید و فروش روزانه :{' '}
              <div style={{ color: 'red', display: 'inline' }}>*</div>
            </div>
          </label>

          <label className={styles.label}> مالک</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            value={values.sellers_count}
            onChange={handleInputChange}
            name="sellers_count"
            min="1"
          />
          <label className={styles.label}> خریدار</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            value={values.buyers_count}
            onChange={handleInputChange}
            name="buyers_count"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              تعداد مراجعین مربوط به رهن و اجاره روزانه :{' '}
              <div style={{ color: 'red', display: 'inline' }}>*</div>
            </div>
          </label>

          <label className={styles.label}> موجر</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            value={values.renters_count}
            onChange={handleInputChange}
            name="renters_count"
            min="1"
          />
          <label className={styles.label}> مستاجر</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            value={values.tenant_count}
            onChange={handleInputChange}
            name="tenant_count"
            min="1"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              تعداد مراجعین موارد دیگر{' '}
            </div>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.other_customers_count}
            onChange={handleInputChange}
            name="other_customers_count"
          />
        </div>
      </div>
    </>
  );
};

export default ThirdTen;
