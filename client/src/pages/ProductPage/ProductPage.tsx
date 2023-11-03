import React from 'react';
import styles from './styles/prodPage.module.scss';

import TopHeader from '../../widgets/TopHeader/TopHeader.tsx';
import PopularFlowers from '../../widgets/PopularFlowers/index.tsx';
import Footer from '../../widgets/Footer/index.tsx';

import main from '../../img/main-product-img.png';
import first from '../../img/first-product-img.png';
import second from '../../img/second-product-img.png';

import background from '../../img/product-page-background.png';

import arrow from '../../img/sliderarrow.svg';
import arrowSecond from '../../img/sliderrightarrow.svg';
import img1 from '../../img/slider1.png';

import Cart from '../../entities/SliderCart/index';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/Busket.js';
import { useForm } from 'react-hook-form';

type Product = {
    id: number;
    cost: number;
    title: string;
    imgs: string[];
    colors: string[];
    light: string;
    format: string;
    flowers: string[];
    description: string;
    categories: string[];
    topics: string[];
    createdAt: string;
    updatedAt: string;
};

const ProductPage = () => {
    let [margin, setMargin] = React.useState(0);

    const moveRight = () => {
        if (margin > -1100) {
            setMargin(margin -= 380)
        } else {
            setMargin(0)
        }
    }
    
    const moveLeft = () => {
        if (margin >= 0) {
            setMargin(-1140)
        } else {
            setMargin(margin += 380)
        }
    }

    const [toggle, setToggle] = React.useState(true);

    function changeOption () {
        setToggle(!toggle);
    }

    const {id} = useParams();
    const dispatch = useDispatch();

    const [data, setData] = React.useState<Product>();

    React.useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`).then((res: any) => res.json()).then((res: any) => setData(res))
    }, [])

    let [count, setCount] = React.useState(1)

    function chooseCount(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.innerText === '+') {
            setCount(count += 1);
        } else if (count > 1) { 
            setCount(count -= 1);
        };
    }

    function addToBusket(event: React.MouseEvent<HTMLButtonElement>) {
        const productInformData = { id: data?.id, cost: data?.cost, ttl: data?.title, count }

        if (!event.currentTarget.classList.contains('btnDisabled')) {
            event.currentTarget.classList.add('btnDisabled')

            localStorage.BusketInform = JSON.stringify(JSON.parse(localStorage.BusketInform).concat(productInformData));
            dispatch(addProduct(productInformData));
        }
    }

    //
    const [reviews, setReviews] = React.useState([]);
    const { control, register, handleSubmit } = useForm();
    const [rating, setRating]= React.useState(1);

    React.useEffect(() => {
        fetch('http://localhost:5000/api/reviews').then((res: any) => res.json()).then((res: any) => setReviews(res))
    }, [])

    function addRating(event: React.MouseEvent<HTMLButtonElement>) {
        const stars = document.querySelectorAll('.star');
        const index = Array.from(stars).indexOf(event.currentTarget);

        setRating(index + 1);
    }

    function mouseMove(event: React.MouseEvent<HTMLButtonElement>) {
        const stars = document.querySelectorAll('.star');
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i] as HTMLButtonElement;

            if (i < Array.from(stars).indexOf(event.currentTarget)) {
                star.firstElementChild?.firstElementChild?.setAttribute('fill', '#FCFF50');
            } else if (i > Array.from(stars).indexOf(event.currentTarget)) {
                star.firstElementChild?.firstElementChild?.setAttribute('fill', 'white');
            } else {
                star.firstElementChild?.firstElementChild?.setAttribute('fill', '#FCFF50');
            }
        }
    }

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
        .then((res: any) => console.log(res))
    }

    return (
        <div className={styles.page}>
            <img className={styles.background} src={background} alt="background" />
            <TopHeader />

            {/*  */}

                <div className={styles.productAbout}>
                    <div className={styles.galary}>
                        <img src={first} alt="galary" />
                        <img src={main} alt="galary" />
                        <img src={second} alt="galary" />
                    </div>
                    <div className={styles.description}>
                        <a className={styles.goBack} href="/catalog">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10.2713 12.1045L6.5 8.33316L10.2713 4.56183L10.7427 5.03316L7.44267 8.33316L10.7427 11.6332L10.2713 12.1045Z" fill="white"/>
                            </svg>
                            назад
                        </a>
                        <h2 className={styles.descriptionTtl}>{data?.title}</h2>
                        <h2 className={styles.cost}>{data?.cost} p</h2>
                        <p className={styles.structure}>
                            <strong>Состав:</strong> Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза
                        </p>
                        <p className={styles.productDescription}>
                            Завораживающая глубина ваших чувств передана огненными красками этого букета
                        </p>
                        <p className={styles.category}>
                            <strong>Категории:</strong>  8 марта, Букет на 14 февраля, Букет на праздник, Букеты цветов на День рождения, Композиции из цветов, Композиции из цветов в коробке
                        </p>
                        <p className={styles.types}>
                            <strong>Метки:</strong> Для начальника, Мужские букеты
                        </p>

                        <div className={styles.buyInterface}>
                            <button className='whiteBtn' onClick={addToBusket}>В корзину</button>

                            <div className={styles.counter}>
                                <button className={styles.minus} onClick={chooseCount}>–</button>
                                <div className={styles.count}>{count}</div>
                                <button className={styles.plus} onClick={chooseCount}>+</button>
                            </div>
                        </div>
                    </div>
                </div>

            {/*  */}

            <h2 className={styles.additionalTtl}>Дополнительно к заказу:</h2>
            <div className={styles.aditionalOptions}>
                <div className={styles.option}>
                    <h2 className={styles.ttlOption}>Удобрения для срезанных цветов</h2>
                    <p className={styles.paragraphOption}>
                        При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас
                    </p>
                </div>
                <div className={styles.option}>
                    <h2 className={styles.ttlOption}>подпишем <br /> открытку</h2>
                    <p className={styles.paragraphOption}>
                        В пожеланиях к букету укажите текст, какой хотите разместить и выберите на сайте саму открытку
                    </p>
                </div>
                <div className={styles.option}>
                    <h2 className={styles.ttlOption}>Фото букета<br /> перед отправкой</h2>
                    <p className={styles.paragraphOption}>
                        В примечании к заказу укажите 
                        об этом и мы отправим фото готового букета перед доставкой. 
                        В праздничные дни в связи 
                        с большой загруженностью такой возможности нет
                    </p>
                </div>
                <div className={styles.option}>
                    <h2 className={styles.ttlOption}>Букет-сюрприз</h2>
                    <p className={styles.paragraphOption}>
                        Если хотите, чтобы получатель не знал, что ему вручат а также от кого, то укажите об этом 
                        в примечании к заказу
                    </p>
                </div>

            </div>

            <div className={styles.switchOptions}>
                <div className={styles.switchBtns}>
                    <h2 className={`${styles.btn} ${toggle && styles.activeBtn}`} onClick={changeOption}>доставка и оплата</h2>
                    <h2 className={`${styles.btn} ${!toggle && styles.activeBtn}`} onClick={changeOption}>отзывы</h2>
                </div>
                <div className={`${styles.slider} ${!toggle && styles.triggerActive}`}>
                    <div className={styles.sliderTrigger}></div>
                </div>
            </div>

            {toggle ?
                <div className={styles.deliveryVariant}>

                    <h2 className={styles.seliveryVarTtl}>Способы оплаты:</h2>
                    <ul className={styles.deliveryList}>
                        <li className={styles.deliveryListItem}>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ</li>
                        <li className={styles.deliveryListItem}>НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</li>
                        <li className={styles.deliveryListItem}>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</li>
                        <li className={styles.deliveryListItem}>КРИПТОВАЛЮТОЙ ОНЛАЙН</li>
                    </ul>

                    <h2 className={styles.seliveryVarTtl}>Способы оплаты:</h2>
                    <ul className={styles.deliveryList}>
                        <li className={styles.deliveryListItem}><strong>Бесплатно</strong> – при заказе на сумму <span className={styles.greenText}> от 90 рублей</span></li>
                        <li className={styles.deliveryListItem}><strong>10 рублей</strong> – при заказе на сумму <span className={styles.greenText}> менее 90 рублей</span></li>
                        <li className={styles.deliveryListItem}>Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники <span className={styles.greenText}>оговариваются с менеджером</span></li>
                        <li className={styles.deliveryListItem}>Так же вы можете забрать ваш заказ самостоятельно по адресу:<p className={styles.greenText}> г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00</p></li>
                    </ul>

                    <h2 className={styles.seliveryVarTtl}>Способы оплаты:</h2>
                    <ul className={styles.deliveryList}>
                        <li className={styles.deliveryListItem}>Доставка осуществляется по городу Минску в пределах МКАД <span className={styles.greenText}>в любой день с 09.00 до 22.00.</span> Доставка в ночное время осуществляется по договоренности с оператором</li>
                    </ul>
                </div> :
                <div className={styles.comments}>
                    <h2 className={styles.greensubttl}>Будьте первым, кто оставил отзыв на “Рубиновые искры”</h2>
                    <h2 className={styles.subttl}>Ваш адрес email не будет опубликован. Обязательные поля помечены *</h2>
                    <br />

                    <div className="">
                        {reviews && reviews.map((elem: any) => {
                            return (
                                <div className="">
                                    <h2 className={styles.laps}>"</h2>
                                    <h2 className={styles.review}>{elem.review}</h2>
                                    <h2 className={styles.name}>{elem.name}, date</h2>
                                </div>
                            )
                        })}
                    </div>

                    <form onSubmit={handleSubmit(sendReview)}>
                        <h2 className={styles.inputTtl}>Ваш отзыв*</h2>
                        <input className={styles.input} type="text" placeholder='Введите комментарий' {...register("review")}/>
                        <h2 className={styles.inputTtl}>Имя*</h2>
                        <input className={styles.input} type="text" placeholder='Введите ваше имя' {...register("name")}/>
                        <h2 className={styles.inputTtl}>E-mail*</h2>
                        <input className={styles.input} type="text" placeholder='Введите вашу почту' {...register("mail")}/>
                        <div className={styles.stars}>
                            <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                                </svg>
                            </span>
                            <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                                </svg>
                            </span>
                            <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                                </svg>
                            </span>
                            <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                                </svg>
                            </span>
                            <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                        <br />
                        <button className='greenBtn'>отправить</button>

                        <h2 className={styles.policy}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span className={styles.pink}>Политикой конфиденциальности</span></h2>
                    </form>
                </div>
            }

            <div className={styles.prodPageBtns}>
                <img className={styles.prodPageSliderArrow} src={arrow} alt="" onClick={moveLeft}/>
                <img className={styles.prodPageSliderArrow} src={arrowSecond} alt="" onClick={moveRight}/>
            </div>
            <div className={styles.prodPageSlider}>
                <div className={styles.sliderLine} style={{marginLeft: `${margin}px`}}>
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default ProductPage;