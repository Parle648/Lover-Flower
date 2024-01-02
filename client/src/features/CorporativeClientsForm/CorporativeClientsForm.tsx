import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles/corporativeClientsForm.module.scss';

const CorporativeClientsForm = () => {
    const {
        control,
        formState: {
            errors
        },
        register,
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    })

    function sendOrder(data: any) {
        
        fetch('http://localhost:5000/api/corporative-clients', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response: any) => response.json())
        .then((result: any) => console.log(result))
        .catch((err: any) => {
            console.log(err);
        }); 

        reset();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(sendOrder)}>
            <div>
                <h2 className={styles.inputTtl}>Наименование организации</h2>
                <input className={`input ${errors?.organisationName && 'wrongValue'}`} placeholder='Введите наименование вашей организации' {...register("organisationName", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.organisationName && <h2 className='errorMessage'>Введите правильно название фирмы</h2>}

                <h2 className={styles.inputTtl}>Почтовый адрес</h2>
                <input className={`input ${errors?.mailIndex && 'wrongValue'}`} placeholder='Введите почтовый адрес' {...register("mailIndex", {
                    required: true,
                    pattern: {
                        value: /^\d{5}(?:[-\s]\d{4})?$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.mailIndex && <h2 className='errorMessage'>Введите правильно почт индекс</h2>}
                
                <h2 className={styles.inputTtl}>Контактное лицо</h2>
                <input className={`input ${errors?.contactPerson && 'wrongValue'}`} placeholder='Введите имя контактного лица' {...register("contactPerson", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.contactPerson && <h2 className='errorMessage'>Введите правильно контактное лицо</h2>}

                <h2 className={styles.inputTtl}>Контактный номер телефона</h2>
                <input className={`input ${errors?.contactNumber && 'wrongValue'}`} placeholder='+7 (977) 777-77-77' {...register("contactNumber", {
                    required: 'Поле имя є обов\'язковим',
                    pattern: {
                        value: /^\+\d{10}$/,
                        message: 'поле имя необходимо заполнить видом +7990000000'
                    }
                })}/>
                {errors?.contactNumber && <h2 className='errorMessage'>поле имя необходимо заполнить видом +7990000000</h2>}

                <h2 className={styles.inputTtl}>Стоимость букета сотруднику (если разная – указать)</h2>
                <input className={`input ${errors?.busketAmount && 'wrongValue'}`} placeholder='Укажите стоимость букета сотруднику' {...register("busketAmount", {
                    required: true,
                })}/>
                {errors?.busketAmount && <h2 className='errorMessage'>Введите стоимость</h2>}

                <h2 className={styles.inputTtl}>Адрес электронной почты</h2>
                <input className={`input ${errors?.emailAdress && 'wrongValue'}`} placeholder='Укажите ваш адрес электронной почты' {...register("emailAdress", {
                    required: 'Поле имя є обов\'язковим',
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Будь ласка, введіть правильний адресу електронної пошти'
                    }
                })}/>
                {errors?.emailAdress && <h2 className='errorMessage'>Будь ласка, введіть правильний адресу електронної пошти</h2>}

                {document.body.clientWidth < 800 && <div>
                <h2 className={styles.inputTtl}>Введите УНП</h2>
                <input className={`input ${errors?.YNP && 'wrongValue'}`} placeholder='УНП' {...register("YNP", {
                    required: true,
                    pattern: {
                        value: /#\d{6}/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.YNP && <h2 className='errorMessage'>Введите УНП</h2>}

                <h2 className={styles.inputTtl}>Расчетный счет</h2>
                <input className={`input ${errors?.currentAccount && 'wrongValue'}`} placeholder='Введите номер расчетного счета' {...register("currentAccount", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.currentAccount && <h2 className='errorMessage'>Введите pасчетный счет</h2>}

                <h2 className={styles.inputTtl}>Код банка</h2>
                <input className={`input ${errors?.bankCode && 'wrongValue'}`} placeholder='Код банка' {...register("bankCode", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.bankCode && <h2 className='errorMessage'>Введите код банка</h2>}

                <h2 className={styles.inputTtl}>Предполагаемое количество заявок в месяц</h2>
                <input className={`input ${errors?.countOfOrders && 'wrongValue'}`} placeholder='Введите предполагаемое количество заявок в месяц' {...register("countOfOrders", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.countOfOrders && <h2 className='errorMessage'>Введите предполагаемое количество заявок в месяц</h2>}

            </div>}

                <button className='greenBtn'>отправить</button>
            </div>


                {document.body.clientWidth > 800 && <div>
                <h2 className={styles.inputTtl}>Введите УНП</h2>
                <input className={`input ${errors?.YNP && 'wrongValue'}`} placeholder='УНП' {...register("YNP", {
                    required: true,
                    pattern: {
                        value: /#\d{6}/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.YNP && <h2 className='errorMessage'>Введите УНП</h2>}

                <h2 className={styles.inputTtl}>Расчетный счет</h2>
                <input className={`input ${errors?.currentAccount && 'wrongValue'}`} placeholder='Введите номер расчетного счета' {...register("currentAccount", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.currentAccount && <h2 className='errorMessage'>Введите pасчетный счет</h2>}

                <h2 className={styles.inputTtl}>Код банка</h2>
                <input className={`input ${errors?.bankCode && 'wrongValue'}`} placeholder='Код банка' {...register("bankCode", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.bankCode && <h2 className='errorMessage'>Введите код банка</h2>}

                <h2 className={styles.inputTtl}>Предполагаемое количество заявок в месяц</h2>
                <input className={`input ${errors?.countOfOrders && 'wrongValue'}`} placeholder='Введите предполагаемое количество заявок в месяц' {...register("countOfOrders", {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите правильно название фирмы'
                    }
                })}/>
                {errors?.countOfOrders && <h2 className='errorMessage'>Введите предполагаемое количество заявок в месяц</h2>}

            </div>}
        </form>
    );
};

export default CorporativeClientsForm;