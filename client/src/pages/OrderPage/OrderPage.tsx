import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles/orderPage.module.scss';

import background from '../../img/order-page-background.png';
import backgroundMobile from '../../img/order-mobile.png';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

const OrderPage = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const sendProps = () => {};

    function changeRadio(event: any) {
        elements.current.forEach((btn: any) => {
            btn.classList.remove(styles.fakeRadioBorder)
        });
        event.currentTarget.previousElementSibling?.classList.toggle(styles.fakeRadioBorder)
    }

    const elements = React.useRef([]);

    React.useEffect(() => {
        elements.current = Array.from(document.querySelectorAll('.fakeBtn'));
    }, [])

    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />

            <div className="wrapper">
                <h2 className={styles.ttl}>оформление</h2>
                <h2 className={styles.secondTtl}>заказа</h2>

                <h2 className={styles.orderTtl}>Оформление заказа</h2>
                <h2 className={styles.orderSubttl}>Контактные данные</h2>

                <form>
                    <h2 className={styles.inputTtl}>Ваше имя*</h2>
                    <input className={styles.input} type="text" placeholder='Введите ваше имя'/>
                    <h2 className={styles.inputTtl}>Ваш телефон*</h2>
                    <input className={styles.input} type="text" placeholder='+7 (977) 777-77-77'/>
                    <h2 className={styles.inputTtl}>Ваш e-mail*</h2>
                    <input className={styles.input} type="text" placeholder='Введите вашу почту'/>
                    <h2 className={styles.inputTtl}>Телефон получателя (необязательно)</h2>
                    <input className={styles.input} type="text" placeholder='+7 (977) 777-77-77'/>
                    <h2 className={styles.inputTtl}>Имя получателя (необязательно)</h2>
                    <input className={styles.input} type="text" placeholder='Введите имя получателя'/>
                    <h2 className={styles.inputTtl}>Комментарий к заказу</h2>
                    <input className={styles.input} type="text" placeholder='Примечания к вашеу заказу,  особые пожелания отделу доставки'/>

                    <h2 className={styles.orderSubttl}>Доставка</h2>
                    
                    <h2 className={styles.inputTtl}>Город*</h2>
                    <input className={styles.input} type="text" placeholder='Введите Город'/>
                    <h2 className={styles.inputTtl}>Улица*</h2>
                    <input className={styles.input} type="text" placeholder='Введите Улица'/>

                    <div className={styles.deliveryInputs}>
                        <label htmlFor="">
                            <h2 className={styles.inputTtl}>Корп/стр</h2>
                            <input className={styles.deliveryInput} type="text" placeholder='Корп/стр'/>
                        </label>
                        <label htmlFor="">
                            <h2 className={styles.inputTtl}>Дом</h2>
                            <input className={styles.deliveryInput} type="text" placeholder='Дом'/>
                        </label>
                        <label htmlFor="">
                            <h2 className={styles.inputTtl}>Кв/офис</h2>
                            <input className={styles.deliveryInput} type="text" placeholder='Кв/офис'/>
                        </label>
                        <label htmlFor="">
                            <h2 className={styles.inputTtl}>Время доставки</h2>
                            <input className={styles.deliveryInput} type="text" placeholder='__/__'/>
                        </label>
                    </div>

                    <div className={styles.paymentVariant}>
                        <h2 className={styles.orderSubttl}>Оплата</h2>

                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Банковская карта
                            <input className={styles.paymentRadio} type="radio" {...register(`payment`, { onChange: changeRadio })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Наличными
                            <input className={styles.paymentRadio} type="radio" {...register(`payment`, { onChange: changeRadio })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Apple pay
                            <input className={styles.paymentRadio} type="radio" {...register(`payment`, { onChange: changeRadio })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Google pay
                            <input className={styles.paymentRadio} type="radio" {...register(`payment`, { onChange: changeRadio })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Криптовалюта
                            <input className={styles.paymentRadio} type="radio" {...register(`payment`, { onChange: changeRadio })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            С расчетного счета
                            <input className={styles.paymentRadio} type="radio" {...register(`payment`, { onChange: changeRadio })}/>
                        </label>

                    </div>

                    <h2 className={styles.orderTtl}>Общая сумма заказа</h2>
                    <h2 className={styles.inputTtl}>Скидка = 0 ₽</h2>
                    <h2 className={styles.inputTtl}>Доставка = 0 ₽</h2>
                    <button className='greenBtn'>К оплате</button>
                    <h2 className={styles.policy}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span className={styles.pink}>Политикой конфиденциальности</span></h2>
                </form>
            </div>


            <Footer />
        </div>
    );
};

export default OrderPage;