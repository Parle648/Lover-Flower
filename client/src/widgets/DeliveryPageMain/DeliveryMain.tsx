import styles from './styles/deliveryMain.module.scss';
import background from '../../img/delivery-page-background.png';
import backgroundMobile from '../../img/delivery-page-background-mobile.png';
import warningCharacter from '../../img/delivery-page-background-mobile.png';

const DeliveryMain = () => {
    return (
        <div>
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />
            <div className={`${styles.wrapper} wrapper`}>
                <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/delivery'>доставка и оплката</a></span>
                
                <h2 className={styles.ttl}>доставка</h2>
                <h2 className={styles.secondTtl}>и оплата</h2>
                
                <div className={styles.dearClients}>
                    <span className={styles.warningCharacter}>!</span>
                    <div>
                        <h2 className={styles.pink}>Дорогие клиенты!</h2>
                        <p className={styles.warningParagraph}>
                            Во время пандемии (COVID-19) компания Lover Flower призывает всех меньше контактировать с другими людьми для защиты себя и своих близких. Именно поэтому мы организовали <span className={styles.green}>БЕСКОНТАКТНУЮ ДОСТАВКУ</span>
                        </p>
                    </div>
                </div>

                <h2 className={styles.additionalTtl}>Способы оплаты:</h2>
                <div className={styles.aditionalOptions}>
                    <div className={styles.option}>
                        <p className={styles.paragraphOption}>
                            БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке
                        </p>
                    </div>
                    <div className={styles.option}>
                        <p className={styles.paragraphOption}>
                            НАЛИЧНЫМИ,  БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации
                        </p>
                    </div>
                    <div className={styles.option}>
                        <p className={styles.paragraphOption}>
                            НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ
                        </p>
                    </div>
                    <div className={styles.option}>
                        <p className={styles.paragraphOption}>
                            КРИПТОВАЛЮТОЙ
                        </p>
                    </div>

                </div>


                <h2 className={styles.seliveryVarTtl}>стоимость доставки:</h2>
                <ul className={styles.deliveryList}>
                    <li className={styles.deliveryListItem}>Бесплатно – при заказе на сумму <span className={styles.green}>от 90 рублей</span></li>
                    <li className={styles.deliveryListItem}>10 рублей – при заказе на сумму <span className={styles.green}>менее 90 рублей</span></li>
                    <li className={styles.deliveryListItem}>
                        Так же вы можете забрать ваш заказ самостоятельно по адресу: <br />
                        <span className={styles.green}>г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00</span>
                    </li>
                </ul>

                <h2 className={styles.seliveryVarTtl}>Условия доставки:</h2>
                <ul className={styles.deliveryList}>
                    <li className={styles.deliveryListItem}>Доставка осуществляется по городу Минску в пределах МКАД <span className={styles.green}>в любой день</span></li>
                    <li className={styles.deliveryListItem}>Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники <span className={styles.green}>оговариваются с менеджером</span></li>
                </ul>

                <div className={styles.additionalBlock}>
                    <h2 className={styles.seliveryVarTtl}>Дополнительно:</h2>

                    <p className={styles.additionalParagraph}>
                        Доставка иному лицу возможна только в случае оплаты заказа заказчиком. Доставка осуществляется не ранее чем через 2 часа после оплаты заказа, но может быть ранее, 
                        если букет есть в наличии либо по договорённости с менеджером.
                    </p>
                    <p className={styles.additionalParagraph}>
                        Время ожидания курьера составляет 15 минут. <br /> В случае если на момент доставки цветов получателя нет либо нет возможности по иным причинам произвести доставку 
                        (указан неточный адрес, закрытая входная дверь, контрольно-пропускная система и др.), мы оставляем за собой право по собственному выбору:
                    </p>

                    <ul className={styles.deliveryList}>
                        <li className={styles.deliveryListItem}>
                            оставить цветы тому, кто открыл дверь;
                        </li>
                        <li className={styles.deliveryListItem}>
                            с заказчиком согласовать повторную доставку, которая дополнительно оплачивается;
                        </li>
                        <li className={styles.deliveryListItem}>
                            отказаться от передачи цветов без возврата денежных средств.
                        </li>
                    </ul>
                    
                    <p className={styles.additionalParagraph}>
                        Если вы либо иной получатель не получили заказ, вам необходимо сообщить об этом менеджеру по телефону <a className={styles.additionalNumber} href='#!'>+375 29 113 69 69.</a>
                    </p>
                    
                    <h2 className={styles.seliveryVarTtl}>Возврат денег:</h2>
                    
                    <p className={styles.additionalParagraph}>
                        При отказе заказчика от заказа в течение двух часов, если заказ ещё не начал готовиться, средства возвращаются в полном объёме. Если же флорист начал подготовку,
                        то заказчик имеет право на возврат 50% стоимости, либо, если ещё не был оплачен, то обязан оплатить 50%.
                    </p>
                    <br />
                    <p className={styles.additionalParagraph}>
                        Цветы надлежащего качества возврату и обмену не подлежат, а если имеются какие-либо недостатки в цветах – возврат производится лишь если эти недостатки не являются
                        природными и естественными изъянами растения. Возврат денежных средств производится незамедлительно на тот счёт, с которого произошла оплата, их же поступление на счёт 
                        зависит от платёжной системы.
                    </p>

                </div>
            
            </div>
        </div>
    );
};

DeliveryMain.propTypes = {
    
};

export default DeliveryMain;