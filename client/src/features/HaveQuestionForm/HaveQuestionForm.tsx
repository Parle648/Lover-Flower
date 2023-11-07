import React from 'react';
import styles from './styles/haveQuestionForm.module.scss';
import { useForm } from 'react-hook-form'; 
import { Link } from 'react-router-dom';

const HaveQuestionForm = () => {
    const {   
        control,
        register,
        handleSubmit,
        reset,
    } = useForm();

    function orderCall(data: any) {
        fetch('http://localhost:5000/api/call/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response: any) => response.json())
        .then((result: any) => console.log(result));

        reset();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(orderCall)}>
            <input className={`${styles.input} greenInput`} type="text" placeholder='Ваше имя' id='' {...register('name')}/>
            <input className={`${styles.input} greenInput`} type="number" placeholder='+7 (977) 777-77-77' id='' {...register('number')}/>
            <textarea  className={`${styles.input} greenInput ${styles.textField}`} placeholder='Ваш комментарий' id='' {...register('message')}/>
            <button className='greenBtn'>отправить</button>
            <p className={styles.policy}>
                Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии c <Link className={styles.link} to='/'>Политикой конфиденциальности</Link>
            </p>
        </form>
    );
};

export default HaveQuestionForm;