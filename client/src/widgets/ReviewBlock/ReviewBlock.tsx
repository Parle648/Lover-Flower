import React from 'react';
import { useForm } from 'react-hook-form';
import Rating from '../../features/Rating/Rating';
import styles from './styles/ReviewBlock.module.scss';

type ReviewsForm = {
    id: string,
};

const ReviewBlock = ({id}: ReviewsForm) => {
    const {   
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });
    const [reviews, setReviews] = React.useState([]);
    let [rating, setRating]= React.useState(1);

    React.useEffect(() => {
        fetch(`http://localhost:5000/api/reviews/`).then((res: any) => res.json()).then((res: any) => setReviews(res));
    }, []);

    function sendReview(data: any) {
        data.rating = rating;
        data.ProductId = Number(id?.slice(1));

        try {
            fetch('http://localhost:5000/api/reviews', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res: any) => res.json())
            .then((res: any) => console.log(res));

            reset()
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <div>
            {reviews.some((elem: any) => elem.ProductId === Number(id?.slice(1))) ? reviews.map((elem: any) => {
                if (elem.ProductId === Number(id?.slice(1))) {
                    return (
                        <div key={elem.id}>
                            <h2 className={styles.laps}>"</h2>
                            <h2 className={styles.review}>{elem.review}</h2>
                            <Rating choosedRating={elem.rating} setRating={setRating}/>
                            <h2 className={styles.name}>{elem.name}</h2>
                        </div>
                    )
                }
            }) : 
            <div>
                <h2 className={styles.greensubttl}>Будьте первым, кто оставил отзыв на “Рубиновые искры”</h2>
                <h2 className={styles.subttl}>Ваш адрес email не будет опубликован. Обязательные поля помечены *</h2>
                <br />
            </div>
            }
            <form onSubmit={handleSubmit(sendReview)}>
                
                <h2 className={styles.inputTtl}>Ваш отзыв*</h2>
                <input className={`input ${errors?.review && 'wrongValue'}`} placeholder='Введите комментарий' id='' {...register('review', {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите ваше имя',
                    }
                })}/>
                {errors?.review && <h2 className='errorMessage'>Введите ваш отзыв</h2>}
                <h2 className={styles.inputTtl}>Имя*</h2>
                <input className={`input ${errors?.name && 'wrongValue'}`} placeholder='Введите ваше имя' id='' {...register('name', {
                    required: true,
                    pattern: {
                        value: /^[А-Яа-яЁё\s]+$/,
                        message: 'Введите ваше имя',
                    }
                })}/>
                {errors?.name && <h2 className='errorMessage'>Введите ваше имя</h2>}
                <h2 className={styles.inputTtl}>E-mail*</h2>
                <input className={`input ${errors?.mail && 'wrongValue'}`} placeholder='Введите вашу почту' {...register("mail", {
                    required: 'Поле имя є обов\'язковим',
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Будь ласка, введіть правильний адресу електронної пошти'
                    }
                })}/>
                {errors?.mail && <h2 className='errorMessage'>Введите вашу почту</h2>}
                <Rating choosedRating={undefined} setRating={setRating}/>
                <br />
                <button className='greenBtn'>отправить</button>

                <h2 className={styles.policy}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span className={styles.pink}>Политикой конфиденциальности</span></h2>
            </form>
        </div>
    );
};

export default ReviewBlock;