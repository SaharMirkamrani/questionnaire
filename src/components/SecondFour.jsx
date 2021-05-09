import styles from '../styles/Main.module.css';

const SecondFour = ({handleInputChange, values}) => {
    return ( <>
		<div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>
              {' '}
              <div className={styles.alignLabels}>نام :</div>{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}>
              <div className={styles.alignLabels}> نام خانوادگی :</div>{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.surname}
              onChange={handleInputChange}
              name="surname"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>
              {' '}
              <div className={styles.alignLabels}>* تاریخ تولد :</div>{' '}
            </label>
            <input
              placeholder="YYYY/MM/D"
              className={styles.input}
              variant="filled"
              value={values.birthDate}
              onChange={handleInputChange}
              name="birthDate"
            />
          </div>
          <div className={styles.singleInput}>
            <label className={styles.label}> * آدرس محل سکونت : </label>
            <input
              className={styles.longInput}
              variant="filled"
              value={values.homeAddress}
              onChange={handleInputChange}
              name="homeAddress"
            />
          </div>
        </div>
    </> );
}
 
export default SecondFour;