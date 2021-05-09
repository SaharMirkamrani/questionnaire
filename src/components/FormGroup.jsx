import { useState } from 'react';
import styles from '../styles/Main.module.css';
import FirstEight from './FirstEight';
import SecondFour from './SecondFour';
import Checkbox from './Checkbox';
import ThirdTen from './ThirdTen';
import FourthEight from './FourthEight';
import FifthEight from './FifthEight';
import LastNine from './LastNine';

const initialValues = {
  centerName: '',
  centerManager: '',
  phone: '',
  mobilePhone: '',
  website: '',
  email: '',
  address: '',
  position: '',
  name: '',
  surname: '',
  birthDate: '',
  homeAddress: '',
  services: [],
  otherServices: '',
  workHourFrom: '',
  workHourTo: '',
  responseHourFrom: '',
  responseHourTo: '',
  consultantsInPerson: '',
  consultantsOnline: '',
  dailyInPersonClients: '',
  dailyOnlineClients: '',
  ownerCount: '',
  buyerCount: '',
  renterCount: '',
  renteeCount: '',
  otherClients: '',
  adAdpproach: '',
  workWithAdWebsites: '',
  doTheyUsePortals: '',
  whatSitesTheyUse: '',
  toAttractsClients: '',
  wantToPayMoreForAttractingClients: '',
  budgetForAd: '',
  bestWayToAd: '',
  doTheyUseFinancialSoftware: '',
  financialSoftware: '',
  areTheySatisfiedWithSoftware: '',
  howMuchTheyPayForSoftware: '',
  areTheyWillingToUseSoftware: '',
  budgetToBuySoftware: '',
  workAreas: '',
  otherPreferedAreas: '',
  doTheyColabInOtherAreas: '',
  areTheyWillingToColab: '',
  areTheyWillingToManage: '',
  areTheyOkWithFiling: '',
  finalComment: '',
  WillTheyUsePillot: '',
  fullName: '',
  jobTitle: '',
  organization: '',
  date: '',
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

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    if (e.target.checked) {
      console.log('check');
      setValues({
        ...values,
        services: [...values.services, name],
      });
    } else {
      console.log('uncheck');
      setValues({
        ...values,
        services: [...values.services],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  console.log(values);

  return (
    <form>
      <div className={styles.main}>
        <FirstEight
          handleInputChange={handleInputChange}
          values={initialValues}
        />
        <SecondFour
          handleInputChange={handleInputChange}
          values={initialValues}
        />
        <Checkbox
          handleCheckboxChange={handleCheckboxChange}
          values={initialValues}
        />
        <ThirdTen
          handleInputChange={handleInputChange}
          values={initialValues}
        />
        <FourthEight
          handleCheckboxChange={handleCheckboxChange}
          values={initialValues}
        />
        <FifthEight
          handleInputChange={handleInputChange}
          values={initialValues}
        />
        <LastNine
          handleInputChange={handleInputChange}
          values={initialValues}
        />
      </div>
      <div className={styles.row}>
        <button
          type="submit"
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
