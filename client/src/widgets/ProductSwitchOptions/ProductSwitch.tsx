import React from 'react';
import ReviewBlock from '../ReviewBlock/ReviewBlock';
import styles from './styles/productSwitch.module.scss';

const ProductSwitch = (id: {id: string}) => {
    const [toggle, setToggle] = React.useState(true);

    function changeOption () {
        setToggle(!toggle);
    }
    return (
        <div>
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
                    <ReviewBlock id={`${id.id}`} />
                </div>
            }
        </div>
    );
};

ProductSwitch.propTypes = {
    
};

export default ProductSwitch;