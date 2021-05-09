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
    console.log(name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
		if(e.target.checked) {
			console.log("check")
			setValues({
				...values,
				services: [...values.services, name],
			});
		} else {
			console.log("uncheck");
			setValues({
				...values,
				services: [...values.services, ]
			})
		}
    
  };

  console.log(values);

  return (
    <form>
      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> <div className={styles.alignLabels}> نام مرکز : </div></label>
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
            <label className={styles.label}> <div className={styles.alignLabels}> * نام مدیر مرکز :</div> </label>
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
            <label className={styles.label}> <div className={styles.alignLabels}> * تلفن ثابت : </div></label>
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
            <label className={styles.label}> <div className={styles.alignLabels}>تلفن همراه :</div> </label>
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
            <label className={styles.label}> <div className={styles.alignLabels}> * آدرس سایت : </div></label>
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
            <label className={styles.label}> <div className={styles.alignLabels}> * آدرس ایمیل :</div> </label>
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
          <label className={styles.label}> <div className={styles.alignLabels}>  آدرس : </div></label>
          <input
            className={styles.longInput}
            variant="filled"
            value={values.address}
            onChange={handleInputChange}
            name="address"
          />
        </div>

        <div className={styles.singleInput}>
          <label className={styles.label}>  سمت : </label>
          <label style={{ margin: '0px 10px' }} htmlFor="manager">
            مدیر
          </label>
          <input
            id="manager"
            type="radio"
            name="position"
            value="مدیر"
            onChange={handleInputChange}
          />

          <label style={{ margin: '0px 10px' }} htmlFor="consultant">
            مشاور{' '}
          </label>
          <input
            id="consultant"
            type="radio"
            name="position"
            value="مشاور"
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.singleInput}>
            <label className={styles.label}> <div className={styles.alignLabels}>نام :</div> </label>
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
            <label className={styles.label}><div className={styles.alignLabels}>  نام خانوادگی :</div> </label>
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
            <label className={styles.label}> <div className={styles.alignLabels}>* تاریخ تولد :</div>  </label>
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
            <label className={styles.label}>  * آدرس محل سکونت : </label>
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
              value={values.dailyInPersonClients}
              onChange={handleInputChange}
              name="dailyInPersonClients"
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
              value={values.workWithAdWebsites}
              onChange={handleInputChange}
              name="workWithAdWebsites"
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

            <label style={{ margin: '0px 10px' }} htmlFor="yes">
              بلی{' '}
            </label>
            <input
              id="yes"
              type="radio"
              name="wantToPayMoreForAttractingClients"
              value="بلی"
              onChange={handleInputChange}
            />
            <label style={{ margin: '0px 10px' }} htmlFor="no">
              خیر{' '}
            </label>
            <input
              id="no"
              type="radio"
              name="wantToPayMoreForAttractingClients"
              value="خیر"
              onChange={handleInputChange}
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
        <div className={styles.row}>
          <label className={styles.label}>
            در صورت استفاده از نرم افزار مالی اطلاعات زیر را تکمیل کنید.
          </label>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              آیا از نرم افزار مالی استفاده میکنید ؟
            </label>
            <label style={{ margin: '0px 10px' }} htmlFor="yes">
              بلی{' '}
            </label>
            <input
              id="yes"
              type="radio"
              name="doTheyUseFinancialSoftware"
              value="بلی"
              onChange={handleInputChange}
            />

            <label style={{ margin: '0px 10px' }} htmlFor="no">
              خیر{' '}
            </label>
            <input
              id="no"
              type="radio"
              name="doTheyUseFinancialSoftware"
              value="خیر"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              * از چه نرم افزاری استفاده میکنید ؟
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.financialSoftware}
              onChange={handleInputChange}
              name="financialSoftware"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              * از عملکرد نرم افزار مورد استفاده راضی هستید ؟
            </label>

            <label style={{ margin: '0px 10px' }} htmlFor="yes">
              بلی{' '}
            </label>
            <input
              id="yes"
              type="radio"
              name="areTheySatisfiedWithSoftware"
              value="بلی"
              onChange={handleInputChange}
            />
            <label style={{ margin: '0px 10px' }} htmlFor="no">
              خیر{' '}
            </label>
            <input
              id="no"
              type="radio"
              name="areTheySatisfiedWithSoftware"
              value="خیر"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              * برای نرم افزار چه مبلغی پرداخت میکنید ؟
            </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.howMuchTheyPayForSoftware}
              onChange={handleInputChange}
              name="howMuchTheyPayForSoftware"
            />
          </div>
        </div>

        <div className={styles.row}>
          {' '}
          <div>
            <label className={styles.label}>
              در صورت نداشتن نرم افزار حسابداری و مالی از قبل تمایل به استفاده
              از یک نرم افزار مناسب و تخصصی برای شغلتان دارید ؟
            </label>

            <label style={{ margin: '0px 10px' }} htmlFor="yes">
              بلی{' '}
            </label>
            <input
              id="yes"
              type="radio"
              name="areTheyWillingToUseSoftware"
              value="بلی"
              onChange={handleInputChange}
            />
            <label style={{ margin: '0px 10px' }} htmlFor="no">
              خیر{' '}
            </label>
            <input
              id="no"
              type="radio"
              name="areTheyWillingToUseSoftware"
              value="خیر"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              حاضر به پرداخت چه بودجه ای در قبال دریافت نرم افزار کاربردی مالی
              هستید ؟
            </label>
            <input
              type="number"
              className={styles.input}
              variant="filled"
              value={values.budgetToBuySoftware}
              onChange={handleInputChange}
              name="budgetToBuySoftware"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>در چه مناطقی فعالیت دارید ؟</label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.workAreas}
              onChange={handleInputChange}
              name="workAreas"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <label className={styles.label}>
              آیا تمایل به فعالیت در مناطق دیگر دارید؟ در صورت تمایل منطقه مورد
              نظر را ذکر کنید .
            </label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.otherPreferedAreas}
              onChange={handleInputChange}
              name="otherPreferedAreas"
            />
          </div>
        </div>

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
              آیا با فایل کردن و بایگانی سیستمی و دسترسی به تمام فایل ها در هر
              کجا و هر زمان به صورت آنلاین و آفلاین موافق هستید ؟
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
            ممنون از توجه شما به توضیحات همکار گرامی پیلوت و صبوری و صداقت شما
            در پاسخگویی به سوالات پرسشنامه .🌹
          </h4>
        </div>
        <div className={styles.column}>
          <label className={styles.label}>
            لطفا نظر کلی خودتون رو در ارتباط با پیلوت بفرمایید تا ما بتوانیم
            بیشتر در خدمت رسانی به شما تلاش کنیم .
          </label>
          <textarea
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
              type="text"
              className={styles.input}
              variant="filled"
              value={values.fullName}
              onChange={handleInputChange}
              name="fullName"
            />
            <label className={styles.label}>به عنوان</label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.jobTitle}
              onChange={handleInputChange}
              name="jobTitle"
            />
            <label className={styles.label}>در مجموعه</label>
            <input
              type="text"
              className={styles.input}
              variant="filled"
              value={values.organization}
              onChange={handleInputChange}
              name="organization"
            />
            <label className={styles.label}>
              اعلام میدارم که اطلاعات ابراز شده با دقت و رعایت اخلاق حرفه ای
              تکمیل شده.
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label className={styles.label}>تاریخ</label>
            <input
              placeholder="YYYY/MM/D"
              className={styles.input}
              variant="filled"
              value={values.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
