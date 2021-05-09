import styles from '../styles/Main.module.css';

const ThirdTen = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}> * خدمات دیگر (توضیح دهید) : </label>
          <input
            type="text"
            className={styles.longInput}
            variant="filled"
            value={values.otherServices}
            onChange={handleInputChange}
            name="otherServices"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              * ساعت کاری از{' '}
            </div>{' '}
          </label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.workHourFrom}
            onChange={handleInputChange}
            name="workHourFrom"
          />
          <label className={styles.label}>{'تا'}</label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.workHourTo}
            onChange={handleInputChange}
            name="workHourTo"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              * ساعت پاسخگویی از
            </div>{' '}
          </label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.responseHourFrom}
            onChange={handleInputChange}
            name="responseHourFrom"
          />
          <label className={styles.label}>{'تا'}</label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.responseHourTo}
            onChange={handleInputChange}
            name="responseHourTo"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              * تعداد مشاور حاضر در محل
            </div>{' '}
          </label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.consultantsInPerson}
            onChange={handleInputChange}
            name="consultantsInPerson"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              * تعداد مشاور غیر حضوری{' '}
            </div>
          </label>
          <input
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.consultantsOnline}
            onChange={handleInputChange}
            name="consultantsOnline"
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
            </div>
          </label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.dailyInPersonClients}
            onChange={handleInputChange}
            name="dailyInPersonClients"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              تعداد مراجعین غیر حضوری در روز{' '}
            </div>
          </label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.dailyOnlineClients}
            onChange={handleInputChange}
            name="dailyOnlineClients"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              تعداد مراجعین مربوط به خرید و فروش روزانه :
            </div>
          </label>

          <label className={styles.label}> مالک</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.ownerCount}
            onChange={handleInputChange}
            name="ownerCount"
          />
          <label className={styles.label}> خریدار</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.buyerCount}
            onChange={handleInputChange}
            name="buyerCount"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.hugeAlignLabels}>
              تعداد مراجعین مربوط به رهن و اجاره روزانه :
            </div>
          </label>

          <label className={styles.label}> موجر</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.renterCount}
            onChange={handleInputChange}
            name="renterCount"
          />
          <label className={styles.label}> مستاجر</label>
          <input
            required
            type="number"
            className={styles.shortInput}
            variant="filled"
            value={values.renteeCount}
            onChange={handleInputChange}
            name="renteeCount"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.biggerAlignLabels}>
              {' '}
              * تعداد مراجعین موارد دیگر{' '}
            </div>
          </label>
          <input
            type="text"
            className={styles.longInput}
            variant="filled"
            value={values.otherClients}
            onChange={handleInputChange}
            name="otherClients"
          />
        </div>
      </div>
    </>
  );
};

export default ThirdTen;
