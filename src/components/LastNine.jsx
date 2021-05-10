import styles from '../styles/Main.module.css';

const LastNine = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
      <div className={styles.singleInput}>
          <label className={styles.label}>
            آیا با همکاران خود در منطقه و خارج از منطقه همکاری دارید؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="coworkers"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="coworkers"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
      <div className={styles.singleInput}>
          <label className={styles.label}>
            تمایل به همکاری و به اشتراک گذاری دو طرفه با رعایت شرایط مطمِن با
            همکاران را دارید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="coworking"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="coworking"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.row}>
      <div className={styles.singleInput}>
          <label className={styles.label}>
            تمایل به بررسی و مدیریت سیستمی مشاوران خود دارید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="employee_system"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="employee_system"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
      <div className={styles.singleInput}>
          <label className={styles.label}>
            آیا با فایل کردن و بایگانی سیستمی و دسترسی به تمام فایل ها در هر کجا
            و هر زمان به صورت آنلاین و آفلاین موافق هستید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="online_datastorage"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="online_datastorage"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <h4 className={styles.label}>
          ممنون از توجه شما به توضیحات همکار گرامی پیلوت و صبوری و صداقت شما در
          پاسخگویی به سوالات پرسشنامه .🌹
        </h4>
      </div>
      <div className={styles.column}>

        <label className={styles.label}>
          لطفا نظر کلی خودتون رو در ارتباط با پیلوت بفرمایید تا ما بتوانیم بیشتر
          در خدمت رسانی به شما تلاش کنیم .
        </label>
        <textarea
          required
          className={styles.longInput}
          value={values.offer}
          onChange={handleInputChange}
          name="offer"
        />
        </div>

      <div className={styles.row}>
      <div className={styles.singleInput}>
          <label className={styles.label}>
            با توجه به تمام توضیحات تمایل به همکاری با پیلوت را دارید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="cooperation"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="cooperation"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default LastNine;
