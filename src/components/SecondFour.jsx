import styles from '../styles/Main.module.css';

const SecondFour = ({ handleInputChange, values }) => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.singleInput}>
          <label className={styles.label}>
            {' '}
            <div className={styles.alignLabels}>نام :</div>{' '}
          </label>
          <input
            required
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
            required
            type="text"
            className={styles.input}
            variant="filled"
            value={values.lastname}
            onChange={handleInputChange}
            name="lastname"
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
            value={values.home_address}
            onChange={handleInputChange}
            name="home_address"
          />
        </div>
      </div>
    </>
  );
};

export default SecondFour;
