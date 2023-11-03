import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './styles/orderPage.module.scss';

import background from '../../img/order-page-background.png';
import backgroundMobile from '../../img/order-mobile.png';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';
import { useDispatch } from 'react-redux';
import { updateStore } from '../../redux/slices/Busket';
import { useSelector } from 'react-redux';

const OrderPage = () => {
    const {
        control,
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

    //
    const dispatch = useDispatch();

    const products = useSelector((state: any) => state.basket.value);
    const amount = products.reduce((sum: number, obj: any) => sum + obj.cost * obj.count, 0)

    React.useEffect(() => {
        dispatch(updateStore(JSON.parse(localStorage.BusketInform)));
    }, [])

    function orderFlowers(data: any) {
        data.orderedProducts = localStorage.BusketInform;

        fetch('http://localhost:5000/api/orders', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((responce: any) => responce.json())
        .then((result: any) => {
            localStorage.BusketInform = JSON.stringify([]);
            window.location.assign('/paysuccess')
        })
        .catch(() => {
            window.location.assign('/paywrong')
        })
    }

    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />

            <div className={styles.wrapper}>
                <div>
                    <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/order'>оформление заказа</a></span>
                    <h2 className={styles.ttl}>оформление</h2>
                    <h2 className={styles.secondTtl}>заказа</h2>

                    <h2 className={styles.orderTtl}>Оформление заказа</h2>
                    <h2 className={styles.orderSubttl}>Контактные данные</h2>

                    <form onSubmit={handleSubmit(orderFlowers)}>
                        <h2 className={styles.inputTtl}>Ваше имя*</h2>
                        <input className={styles.input} type="text" placeholder='Введите ваше имя' {...register("name")}/>
                        <h2 className={styles.inputTtl}>Ваш телефон*</h2>
                        <input className={styles.input} type="number" placeholder='+7 (977) 777-77-77' {...register("number")}/>
                        <h2 className={styles.inputTtl}>Ваш e-mail*</h2>
                        <input className={styles.input} type="mail" placeholder='Введите вашу почту' {...register("mail")}/>
                        <h2 className={styles.inputTtl}>Телефон получателя (необязательно)</h2>
                        <input className={styles.input} type="text" placeholder='+7 (977) 777-77-77' {...register("personNumber")}/>
                        <h2 className={styles.inputTtl}>Имя получателя (необязательно)</h2>
                        <input className={styles.input} type="text" placeholder='Введите имя получателя' {...register("personName")}/>
                        <h2 className={styles.inputTtl}>Комментарий к заказу</h2>
                        <input className={styles.input} type="text" placeholder='Примечания к вашеу заказу,  особые пожелания отделу доставки' {...register("comment")}/>

                        <h2 className={styles.orderSubttl}>Доставка</h2>
                        
                        <h2 className={styles.inputTtl}>Город*</h2>
                        <input className={styles.input} type="text" placeholder='Введите Город' {...register("city")}/>
                        <h2 className={styles.inputTtl}>Улица*</h2>
                        <input className={styles.input} type="text" placeholder='Введите Улица' {...register("street")}/>

                        <div className={styles.deliveryInputs}>
                            <label htmlFor="">
                                <h2 className={styles.inputTtl}>Корп/стр</h2>
                                <input className={styles.deliveryInput} type="text" placeholder='Корп/стр' {...register("corp")}/>
                            </label>
                            <label htmlFor="">
                                <h2 className={styles.inputTtl}>Дом</h2>
                                <input className={styles.deliveryInput} type="text" placeholder='Дом' {...register("house")}/>
                            </label>
                            <label htmlFor="">
                                <h2 className={styles.inputTtl}>Кв/офис</h2>
                                <input className={styles.deliveryInput} type="text" placeholder='Кв/офис' {...register("office")}/>
                            </label>
                            <label htmlFor="">
                                <h2 className={styles.inputTtl}>Время доставки</h2>
                                <input className={styles.deliveryInput} type="text" placeholder='__/__' {...register("deliveryTime")}/>
                            </label>
                        </div>

                        <div className={styles.paymentVariant}>
                            <h2 className={styles.orderSubttl}>Оплата</h2>
                            <Controller
                                name="deliveryType" // Уникальное имя для радиокнопок
                                control={control}
                                defaultValue="option1" // Значение по умолчанию
                                render={({ field }) => (
                                <div>
                                     <label className={styles.radioLabel}>
                                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                                            Банковская карта
                                            <input className={styles.paymentRadio} type="radio" value='bank-cart' {...register(`deliveryType`, { onChange: changeRadio })}/>
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                                            Наличными
                                            <input className={styles.paymentRadio} type="radio" value='cash' {...register(`deliveryType`, { onChange: changeRadio })}/>
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                                            Apple pay
                                            <input className={styles.paymentRadio} type="radio" value='apple-pay' {...register(`deliveryType`, { onChange: changeRadio })}/>
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                                            Google pay
                                            <input className={styles.paymentRadio} type="radio" value='google-pay' {...register(`deliveryType`, { onChange: changeRadio })}/>
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                                            Криптовалюта
                                            <input className={styles.paymentRadio} type="radio" value='crypto' {...register(`deliveryType`, { onChange: changeRadio })}/>
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                                            С расчетного счета
                                            <input className={styles.paymentRadio} type="radio" value='from-payment-account' {...register(`deliveryType`, { onChange: changeRadio })}/>
                                        </label>
                                </div>
                                )}
                            />
                        </div>

                        <h2 className={styles.orderTtl}>Общая сумма заказа</h2>
                        <h2 className={styles.inputTtl}>Скидка = 0 ₽</h2>
                        <h2 className={styles.inputTtl}>Доставка = 0 ₽</h2>
                        <button className='greenBtn'>К оплате</button>
                        <h2 className={styles.policy}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span className={styles.pink}>Политикой конфиденциальности</span></h2>
                    </form>
                </div>
                <div className={styles.products}>
                    <h2 className={styles.orderSubttl}>Ваш заказ:</h2>
                    {products.map((product: any) => {
                        return (
                            <ProductSnippet id={product.id} cost={product.cost} count={product.count} ttl={product.ttl}/>
                        );
                    })}
                    <h2 className={styles.orderSubttl}>Предварительный итог: {amount} руб.</h2>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default OrderPage;