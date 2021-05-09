import styles from '../styles/Main.module.css';

const Checkbox = ({handleCheckboxChange, values}) => {
    return ( <>
		<div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نوع خدمات قابل ارایه : </label>
            <label style={{ margin: '0px 10px' }} htmlFor="services">
              خرید و فروش
            </label>
            <input
              type="checkbox"
              value={values.services.buyAndSell}
              onChange={handleCheckboxChange}
              name="buyAndSell"
              id="buyAndSell"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              رهن و اجاره
            </label>
            <input
              type="checkbox"
              value={values.services.mortgageAndRent}
              onChange={handleCheckboxChange}
              name="mortgageAndRent"
              id="mortgageAndRent"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              زمین
            </label>
            <input
              type="checkbox"
              value={values.services.land}
              onChange={handleCheckboxChange}
              name="land"
              id="land"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              ویلا
            </label>
            <input
              type="checkbox"
              value={values.services.house}
              onChange={handleCheckboxChange}
              name="house"
              id="house"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              اجاره روزانه
            </label>
            <input
              type="checkbox"
              value={values.services.dailyRent}
              onChange={handleCheckboxChange}
              name="dailyRent"
              id="dailyRent"
            />
          </div>
        </div>
		</> );
}
 
export default Checkbox;