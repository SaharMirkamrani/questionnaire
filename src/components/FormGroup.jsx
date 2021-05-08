import { useState } from 'react';
import styles from '../styles/Main.module.css';

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
  services: {
    buyAndSell: '',
    mortgageAndRent: '',
    land: '',
    house: '',
    dailyRent: '',
  },
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
};

const Form = () => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values);

  return (
    <form>
      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نام مرکز : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.company}
              onChange={handleInputChange}
              name="centerName"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}> * نام مدیر مرکز : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.centerManager}
              onChange={handleInputChange}
              name="centerManager"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> * تلفن ثابت : </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}>تلفن همراه : </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.mobilePhone}
              onChange={handleInputChange}
              name="mobilePhone"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> * آدرس سایت : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.website}
              onChange={handleInputChange}
              name="website"
            />
          </div>

          <div className={styles.singleInput}>
            <label className={styles.label}> * آدرس ایمیل : </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}> آدرس : </label>
          <input
            className={styles.longInput}
            variant="filled"
            value={values.address}
            onChange={handleInputChange}
            name="address"
          />
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}> سمت : </label>
          <input
            id="manager"
            type="radio"
            name="position"
            value={values.position}
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="manager">
            مدیر
          </label>

          <input
            id="consultant"
            type="radio"
            name="position"
            value={values.position}
            onChange={handleInputChange}
          />
          <label style={{ margin: '0px 10px' }} htmlFor="consultant">
            مشاور{' '}
          </label>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نام : </label>
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
            <label className={styles.label}>نام خانوادگی : </label>
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
            <label className={styles.label}> * تاریخ تولد : </label>
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
        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>نوع خدمات قابل ارایه : </label>
            <label style={{ margin: '0px 10px' }} htmlFor="services">
              خرید و فروش
            </label>
            <input
              type="checkbox"
              value={values.services.buyAndSell}
              onChange={handleInputChange}
              name="buyAndSell"
              id="buyAndSell"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              رهن و اجاره
            </label>
            <input
              type="checkbox"
              value={values.services.mortgageAndRent}
              onChange={handleInputChange}
              name="mortgageAndRent"
              id="mortgageAndRent"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              زمین
            </label>
            <input
              type="checkbox"
              value={values.services.land}
              onChange={handleInputChange}
              name="land"
              id="land"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              ویلا
            </label>
            <input
              type="checkbox"
              value={values.services.house}
              onChange={handleInputChange}
              name="house"
              id="house"
            />

            <label style={{ margin: '0px 10px' }} htmlFor="services">
              اجاره روزانه
            </label>
            <input
              type="checkbox"
              value={values.services.dailyRent}
              onChange={handleInputChange}
              name="dailyRent"
              id="dailyRent"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}>
              {' '}
              * خدمات دیگر (توضیح دهید) :{' '}
            </label>
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
          <div>
            <label className={styles.label}> * ساعت کاری از </label>
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
          <div>
            <label className={styles.label}> * ساعت پاسخگویی از </label>
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
          <div>
            <label className={styles.label}> * تعداد مشاور حاضر در محل </label>
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
          <div>
            <label className={styles.label}> * تعداد مشاور غیر حضوری </label>
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
          <div>
            <label className={styles.label}> تعداد مراجعین حضوری در روز </label>
            <input
              type="number"
              className={styles.shortInput}
              variant="filled"
              value={values.clientsInPerson}
              onChange={handleInputChange}
              name="clientsInPerson"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              تعداد مراجعین غیر حضوری در روز{' '}
            </label>
            <input
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
          <div>
            <label className={styles.label}>
              {' '}
              تعداد مراجعین مربوط به خرید و فروش روزانه :
            </label>

            <label className={styles.label}> مالک</label>
            <input
              type="number"
              className={styles.shortInput}
              variant="filled"
              value={values.ownerCount}
              onChange={handleInputChange}
              name="ownerCount"
            />
            <label className={styles.label}> خریدار</label>
            <input
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
          <div>
            <label className={styles.label}>
              {' '}
              تعداد مراجعین مربوط به رهن و اجاره روزانه :
            </label>

            <label className={styles.label}> موجر</label>
            <input
              type="number"
              className={styles.shortInput}
              variant="filled"
              value={values.renterCount}
              onChange={handleInputChange}
              name="renterCount"
            />
            <label className={styles.label}> مستاجر</label>
            <input
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
          <div>
            <label className={styles.label}> * تعداد مراجعین موارد دیگر </label>
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

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              از چه طریقی اطلاع رسانی میکنید ؟{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.adAdpproach}
              onChange={handleInputChange}
              name="adAdpproach"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              آیا با سایت های تبلیغاتی کار میکنید ؟{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.workWithOtherAdWebsites}
              onChange={handleInputChange}
              name="workWithOtherAdWebsites"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              آیا از پرتال های معرفی مثل دیوار استفاده میکنید ؟{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.doTheyUsePortals}
              onChange={handleInputChange}
              name="doTheyUsePortals"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              از چه سایت هایی برای معرفی فایل ها استفاده میکنید ؟{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.whatSitesTheyUse}
              onChange={handleInputChange}
              name="whatSitesTheyUse"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              جهت جذب مشتری چه تبلیغاتی انجام میدهید ؟{' '}
            </label>
            <input
              type="text"
              className={styles.longInput}
              variant="filled"
              value={values.toAttractsClients}
              onChange={handleInputChange}
              name="toAttractsClients"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              آیا تمایل دارید برای جذب مشتری بیشتر هزینه کنید ؟{' '}
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.wantToPayMoreForAttractingClients}
              onChange={handleInputChange}
              name="wantToPayMoreForAttractingClients"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              {' '}
              چقدر بودجه تبلیغاتی دارید ؟{' '}
            </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.budgetForAd}
              onChange={handleInputChange}
              name="budgetForAd"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              بهترین نوع تبلیغات برای کار شما چیست ؟
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.bestWayToAd}
              onChange={handleInputChange}
              name="bestWayToAd"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
