import styles from '../styles/Main.module.css';

const LastNine = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            آیا با همکاران خود در منطقه و خارج از منطقه همکاری دارید؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="doTheyColabInOtherAreas"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="doTheyColabInOtherAreas"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
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
            name="areTheyWillingToColab"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="areTheyWillingToColab"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            تمایل به بررسی و مدیریت سیستمی مشاوران خود دارید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="areTheyWillingToManage"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="areTheyWillingToManage"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
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
            name="areTheyOkWithFiling"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="areTheyOkWithFiling"
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
          variant="filled"
          value={values.finalComment}
          onChange={handleInputChange}
          name="finalComment"
        />
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>
            با توجه به تمام توضیحات تمایل به همکاری با پیلوت را دارید ؟
          </label>

          <label style={{ margin: '0px 10px' }} htmlFor="yes">
            بلی{' '}
          </label>
          <input
            id="yes"
            type="radio"
            name="WillTheyUsePillot"
            value="بلی"
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="no">
            خیر{' '}
          </label>
          <input
            id="no"
            type="radio"
            name="WillTheyUsePillot"
            value="خیر"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label className={styles.label}>اینجانب</label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.fullName}
            onChange={handleInputChange}
            name="fullName"
          />
          <label className={styles.label}>به عنوان</label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.jobTitle}
            onChange={handleInputChange}
            name="jobTitle"
          />
          <label className={styles.label}>در مجموعه</label>
          <input
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.organization}
            onChange={handleInputChange}
            name="organization"
          />
          <label className={styles.label}>
            اعلام میدارم که اطلاعات ابراز شده با دقت و رعایت اخلاق حرفه ای تکمیل
            شده.
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <label className={styles.label}>تاریخ</label>
          <input
            required
            placeholder="YYYY/MM/D"
            className={styles.input}
            variant="filled"
            value={values.date}
            onChange={handleInputChange}
            name="date"
          />
        </div>
      </div>
    </>
  );
};

export default LastNine;
