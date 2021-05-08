import { useState } from 'react';
import styles from '../styles/Main.module.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const initialValues = {
  centerName: '',
  centerManager: '',
  phone: '',
  mobilePhone: '',
  website: '',
  email: '',
  address: '',
};

const Form = () => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form>
			<div className={styles.main}>
			<div>
				<label className={styles.label}>نام مرکز : </label>
				<TextField
				className={styles.input}
				variant="filled"
        value={values.company}
        onChange={handleInputChange}
        name="centerName"
      />
			</div>

      <input
        value={values.company}
        onChange={handleInputChange}
        name="centerManager"
        label="نام مدیر مرکز"
      />

      <input
        value={values.company}
        onChange={handleInputChange}
        name="phone"
        label="تلفن ثابت"
      />

			<input
        value={values.company}
        onChange={handleInputChange}
        name="mobilePhone"
      />
			</div>
    </form>
  );
};

export default Form;
