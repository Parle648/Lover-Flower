import React from 'react';
import styles from './styles/haveQuestionForm.module.scss';
import { useForm } from 'react-hook-form'; 
import { Link } from 'react-router-dom';

const HaveQuestionForm = () => {
    const {   
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    function orderCall(data: any) {
        try {
            fetch('http://localhost:5000/api/call/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response: any) => response.json())
            .then((result: any) => console.log(result));
    
            reset();
        } catch (err) {
            console.error(err);
        };
    };
    
    return (
        <form className={styles.form} onSubmit={handleSubmit(orderCall)}>
            <label className='label'>
                <input  className={`input ${errors?.name && 'wrongValue'}`} type="text" placeholder='Ваше имя' id='' {...register('name', {
                    required: true,
                    pattern: {
                        value: /[^\w\d\s]/u,
                        message: 'Введите ваше имя',
                    }
                })}/>
                {errors?.name && <h2 className='errorMessage'>Введите ваше имя</h2>}
                {errors?.name && <h2 className='errorMessage exlamation'>!</h2>}
            </label>
            <label className='label'>
                <input className={`input ${errors?.number && 'wrongValue'}`} type="number" placeholder='+7 (977) 777-77-77' id='' {...register('number', {
                    required: true,
                    pattern: {
                        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                        message: 'Введите ваше имя',
                    }
                })}/>
                {errors?.number && <h2 className='errorMessage'>Введите ваш номер телефона</h2>}
                {errors?.number && <h2 className='errorMessage exlamation'>!</h2>}
            </label>
            <label className='label'>
                <input className={`input ${errors?.message && 'wrongValue'}`} placeholder='Ваш комментарий' id='' {...register('message', {
                    required: true,
                    pattern: {
                        value: /[^\w\d\s]/u,
                        message: 'Введите ваше имя',
                    }
                })}/>
                {errors?.message && <h2 className='errorMessage'>Введите ваш Комментарий</h2>}
                {errors?.message && <h2 className='errorMessage exlamation'>!</h2>}
            </label>
            <button className='greenBtn'>отправить</button>
            <p className={styles.policy}>
                Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии c <Link className={styles.link} to='/'>Политикой конфиденциальности</Link>
            </p>
        </form>
    );
};

export default HaveQuestionForm;