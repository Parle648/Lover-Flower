import React from 'react';

import { useForm } from 'react-hook-form';
import Rating from '../../features/Rating/Rating';

import styles from './styles/ReviewBlock.module.scss';

type ReviewsForm = {
    id: string,
}

const ReviewBlock = ({id}: ReviewsForm) => {
    const { register, handleSubmit } = useForm();
    const [reviews, setReviews] = React.useState([]);
    let [rating, setRating]= React.useState(1);

    React.useEffect(() => {
        fetch(`http://localhost:5000/api/reviews/`).then((res: any) => res.json()).then((res: any) => setReviews(res))
    }, []);

    function sendReview(data: any) {
        data.rating = rating;
        data.ProductId = Number(id?.slice(1));

        fetch('http://localhost:5000/api/reviews', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res: any) => res.json())
        .then((res: any) => console.log(res));
    };

    console.log(reviews.some((elem: any) => elem.ProductId === Number(id?.slice(1))));

    return (
        <div>
            {reviews.some((elem: any) => elem.ProductId === Number(id?.slice(1))) ? reviews.map((elem: any) => {
                if (elem.ProductId === Number(id?.slice(1))) {
                    return (
                        <div key={elem.id}>
                            <h2 className={styles.laps}>"</h2>
                            <h2 className={styles.review}>{elem.review}</h2>
                            <h2 className={styles.name}>{elem.name}, date</h2>
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
                <input className={styles.input} type="text" placeholder='Введите комментарий' {...register("review")}/>
                <h2 className={styles.inputTtl}>Имя*</h2>
                <input className={styles.input} type="text" placeholder='Введите ваше имя' {...register("name")}/>
                <h2 className={styles.inputTtl}>E-mail*</h2>
                <input className={styles.input} type="text" placeholder='Введите вашу почту' {...register("mail")}/>
                <Rating choosedRating='1' setRating={setRating}/>
                <br />
                <button className='greenBtn'>отправить</button>

                <h2 className={styles.policy}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span className={styles.pink}>Политикой конфиденциальности</span></h2>
            </form>
        </div>
    );
};

export default ReviewBlock;