import React from 'react';
import styles from './styles/prodPage.module.scss';

import TopHeader from '../../widgets/TopHeader/TopHeader.tsx';
import Footer from '../../widgets/Footer/index.tsx';

const ProductPage = () => {
    return (
        <div className={styles.page}>
            <TopHeader />
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
                    <h2 className={`${styles.btn} ${styles.activeBtn}`}>доставка и оплата</h2>
                    <h2 className={styles.btn}>отзывы</h2>
                </div>
                <div className={styles.slider}>
                    <div className={styles.sliderTrigger}></div>
                </div>
            </div>

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
            </div>

            <div className={styles.comments}>
                <h2 className={styles.greensubttl}>Будьте первым, кто оставил отзыв на “Рубиновые искры”</h2>
                <h2 className={styles.subttl}>Ваш адрес email не будет опубликован. Обязательные поля помечены *</h2>
                <br />
                <form>
                    <h2 className={styles.inputTtl}>Ваш отзыв*</h2>
                    <input className={styles.input} type="text" placeholder='Введите комментарий'/>
                    <h2 className={styles.inputTtl}>Ваш отзыв*</h2>
                    <input className={styles.input} type="text" placeholder='Введите комментарий'/>
                    <h2 className={styles.inputTtl}>Ваш отзыв*</h2>
                    <input className={styles.input} type="text" placeholder='Введите комментарий'/>
                    <br />
                    <button className='greenBtn'>отправить</button>

                    <h2 className={styles.policy}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span className={styles.pink}>Политикой конфиденциальности</span></h2>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;