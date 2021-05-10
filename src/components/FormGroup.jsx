import { useState } from 'react';
import styles from '../styles/Main.module.css';
import FirstEight from './FirstEight';
import SecondFour from './SecondFour';
import Checkbox from './Checkbox';
import ThirdTen from './ThirdTen';
import FourthEight from './FourthEight';
import FifthEight from './FifthEight';
import LastNine from './LastNine';
import axios from 'axios';

const initialValues = {
  center_name: '',
  center_admin: '',
  telephone_number: '',
  mobile_number: '',
  website_address: '',
  email_address: '',
  company_address: '',
  job_title: '',
  name: '',
  lastname: '',
  birthDate: '',
  home_address: '',
  services: {},
  services_description: '',
  job_hour_start: '',
  job_hour_end: '',
  suport_hour_start: '',
  suport_hour_end: '',
  advisors_count: '',
  remoteadvisors: '',
  onboard_customer_count: '',
  remote_customer_count: '',
  sellers_count: '',
  buyers_count: '',
  renters_count: '',
  tenant_count: '',
  other_customers_count: '',
  broadcasting_way: '',
  advertising_websites: '',
  using_divar: '',
  which_platforms: '',
  advertising_system: '',
  more_advertising: '',
  advertising_budget: '',
  best_advertising: '',
  user_accounting_software: '',
  accounting_software_name: '',
  accounting_software_status: '',
  accounting_software_cost: '',
  accounting_software_want: '',
  payfor_accounting_software: '',
  active_districts: '',
  future_districts: '',
  coworkers: '',
  coworking: '',
  employee_system: '',
  online_datastorage: '',
  offer: '',
  cooperation: '',
  time_stamp: '',
};

const Form = () => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    if (e.target.checked) {
      setValues({
        ...values,
        services: { ...values.services, [name]: name },
      });
    } else {
      setValues({
        ...values,
        services: { ...values.services },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://survey.pillot.ir/admin/Questionnaire/API/_getall',
        { ...values },
        {
          headers: {
            Authorization: 'test',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => console.log(response.config.data))
      .catch((error) => {
        console.error(error);
      });
  };

  const setTimeStamp = () => {
    setValues({ ...values, time_stamp: new Date().toLocaleString() });
  };

  console.log(values);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.main}>
        <FirstEight handleInputChange={handleInputChange} values={values} />
        <SecondFour handleInputChange={handleInputChange} values={values} />
        <Checkbox handleCheckboxChange={handleCheckboxChange} values={values} />
        <ThirdTen handleInputChange={handleInputChange} values={values} />
        <FourthEight handleInputChange={handleInputChange} values={values} />
        <FifthEight handleInputChange={handleInputChange} values={values} />
        <LastNine handleInputChange={handleInputChange} values={values} />
      </div>
      <div className={styles.row}>
        <button
          type="submit"
          onClick={setTimeStamp}
          onSubmit={handleSubmit}
          className={styles.submitBtn}
        >
          {' '}
          ثبت{' '}
        </button>
      </div>
    </form>
  );
};

export default Form;
