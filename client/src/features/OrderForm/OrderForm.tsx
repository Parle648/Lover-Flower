import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/orderForm.module.scss';
import { Controller, useForm } from 'react-hook-form';

const OrderForm = () => {
    const {
        control,
        formState: {
            errors
        },
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    })

    const sendProps = () => {};

    React.useEffect(() => {
        elements.current = Array.from(document.querySelectorAll('.fakeBtn'));
    }, [])

    const elements = React.useRef([]);

    function changeRadio(event: any) {
        elements.current.forEach((btn: any) => {
            btn.classList.remove(styles.fakeRadioBorder)
        });
        event.currentTarget.previousElementSibling?.classList.toggle(styles.fakeRadioBorder)
    }

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
        <form onSubmit={handleSubmit(orderFlowers)}>
        <h2 className={styles.inputTtl}>Ваше имя*</h2>
        <input className={`input ${errors?.name && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("name", {
            required: 'Поле имя є обов\'язковим',
            pattern: {
                value: /^[А-Яа-яЁё\s]+$/,
                message: 'поле имя необходимо заполнить видом Антон'
            }
        })}/>
        {errors?.name && <h2 className='errorMessage'>поле имя необходимо заполнить видом Антон</h2>}
        
        <h2 className={styles.inputTtl}>Ваш телефон*</h2>
        <input className={`input ${errors?.number && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("number", {
            required: 'Поле имя є обов\'язковим',
            pattern: {
                value: /^\+\d{10}$/,
                message: 'поле имя необходимо заполнить видом +7990000000'
            }
        })}/>
        {errors?.number && <h2 className='errorMessage'>поле имя необходимо заполнить видом +7990000000</h2>}

        <h2 className={styles.inputTtl}>Ваш e-mail*</h2>
        <input className={`input ${errors?.mail && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("mail", {
            required: 'Поле имя є обов\'язковим',
            pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Будь ласка, введіть правильний адресу електронної пошти'
            }
        })}/>
        {errors?.mail && <h2 className='errorMessage'>Будь ласка, введіть правильний адресу електронної пошти</h2>}

        <h2 className={styles.inputTtl}>Телефон получателя (необязательно)</h2>
        <input className={`input ${errors?.personNumber && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("personNumber", {
            required: false,
            pattern: {
                value: /^\+\d{10}$/,
                message: 'поле имя необходимо заполнить видом +7990000000'
            }
        })}/>
        {errors?.personNumber && <h2 className='errorMessage'>поле имя необходимо заполнить видом +7990000000</h2>}

        <h2 className={styles.inputTtl}>Имя получателя (необязательно)</h2>
        <input className={`input ${errors?.personName && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("personName", {
            required: false,
            pattern: {
                value: /^[А-Яа-яЁё\s]+$/,
                message: 'поле имя необходимо заполнить видом Антон'
            }
        })}/>
        {errors?.personName && <h2 className='errorMessage'>поле имя необходимо заполнить видом Антон</h2>}

        <h2 className={styles.inputTtl}>Комментарий к заказу</h2>
        <input className={`input ${errors?.comment && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("comment", {
            required: false,
            pattern: {
                value: /^[А-Яа-яЁё\s]+$/,
                message: 'комментарий не должэен быть пустым'
            }
        })}/>
        {errors?.comment && <h2 className='errorMessage'>комментарий не должэен быть пустым</h2>}
        
        <h2 className={styles.orderSubttl}>Доставка</h2>

        <h2 className={styles.inputTtl}>Город*</h2>
        <input className={`input ${errors?.city && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("city", {
            required: true,
            pattern: {
                value: /^[А-Яа-яЁё\s]+$/,
                message: 'комментарий не должэен быть пустым'
            }
        })}/>
        {errors?.city && <h2 className='errorMessage'>введите название города</h2>}

        <h2 className={styles.inputTtl}>Улица*</h2>
        <input className={`input ${errors?.street && 'wrongValue'}`} placeholder='Введите ваше имя' {...register("street", {
            required: true,
            pattern: {
                value: /^[А-Яа-яЁё\s]+$/,
                message: 'комментарий не должэен быть пустым'
            }
        })}/>
        {errors?.street && <h2 className='errorMessage'>введите название улицы</h2>}
        
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
                            <input className={styles.paymentRadio} type="radio" value='bank-cart' {...register(`deliveryType`, { onChange: changeRadio, required: true })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Наличными
                            <input className={styles.paymentRadio} type="radio" value='cash' {...register(`deliveryType`, { onChange: changeRadio, required: true })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Apple pay
                            <input className={styles.paymentRadio} type="radio" value='apple-pay' {...register(`deliveryType`, { onChange: changeRadio, required: true })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Google pay
                            <input className={styles.paymentRadio} type="radio" value='google-pay' {...register(`deliveryType`, { onChange: changeRadio, required: true })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            Криптовалюта
                            <input className={styles.paymentRadio} type="radio" value='crypto' {...register(`deliveryType`, { onChange: changeRadio, required: true })}/>
                        </label>
                        <label className={styles.radioLabel}>
                            <span className={`${styles.fakeRadio} fakeBtn`}></span>
                            С расчетного счета
                            <input className={styles.paymentRadio} type="radio" value='from-payment-account' {...register(`deliveryType`, { onChange: changeRadio, required: true })}/>
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
    );
};

OrderForm.propTypes = {
    
};

export default OrderForm;