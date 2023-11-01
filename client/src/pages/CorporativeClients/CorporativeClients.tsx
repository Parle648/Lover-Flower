import React from 'react';
import TopHeader from '../../widgets/TopHeader/TopHeader.tsx';
import Footer from '../../widgets/Footer/index.tsx';

import styles from './styles/corporativClients.module.scss';
import background from '../../img/corporative-client-background.png';
import backgroundMobile from '../../img/corporative-client-background-mobile.png';

import { Link } from 'react-router-dom';

const CorporativeClients = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="background" />

            <div className={styles.wrapper}>
                <h2 className={styles.ttl}>Букеты</h2>
                <h2 className={styles.subttl}>поздравления для</h2>
                <h2 className={styles.subTtlSecond}>Ваших работников</h2>

                <p className={styles.askParagraph}>
                    Если у Вас большое количество сотрудников (или не очень) и вы устали помнить о каждом их Дне рождении и как чем поздравить, то<span className={styles.green}> мы можем делать это за Вас.</span>
                </p>

                <div className={styles.description}>
                    <p className={styles.descriptionParagraph}>
                        Одним вариантом сотрудничества является предоставление нам перечня сотрудников с Днями их рождений и мы уже самостоятельно связываемся с каждым, изготавливаем букет либо композицию и 
                        доставляем в удобное время сотруднику либо по месту работы либо по месту жительства, так как в настоящее время многие сотрудники продолжают выполнять работу удалённо либо находятся на 
                        больничном или в отпуске. 
                    </p>
                    <p className={styles.descriptionParagraph}>
                        Другим вариантом сотрудничества является заказ букетов самостоятельно представителем организации за день до нужной даты.
                    </p>
                    <p className={styles.descriptionParagraph}>
                        Так вы <span className={styles.green}>экономите время</span> остальных сотрудников на сбор денег на поиск подарка и доставку его получателю, а также оберегаете себя от риска пропустить кого-либо из важных организации людей, 
                        а именно так Вы проявляете заботу и внимание к сотрудникам для того, чтобы и к делам Вашей организации они относились со всей внимательностью и также не пропускали важные дни.
                    </p>
                </div>

                <h2 className={styles.chooseTtl}>Букеты могут изготавливаться в фирменном цвете организации и есть возможность делать поздравления на Вашей фирменной открытке, которую мы можем изготовить сами.</h2>
            
                <h2 className={styles.chooseSubttl}>Стоимость одного букета не менее 60 рублей.</h2>

                <div className={styles.grid}>
                    <div className={styles.gridItem}>
                        <h2 className={`${styles.gridItemTtl} ${styles.green}`}>
                        Количество заявок в месяц
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={`${styles.gridItemTtl} ${styles.green}`}>
                        Приятные бонусы
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={styles.gridItemTtl}>
                        1-2
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={styles.gridItemTtl}>
                        Стоимость одной доставки по Минску – 10 рублей, за пределы МКАД – от 20 рублей
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={styles.gridItemTtl}>
                        3-10
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={styles.gridItemTtl}>
                        Доставка бесплатно <br />
                        Букет-подарок руководителю в его День рождения
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={styles.gridItemTtl}>
                        Более 10
                        </h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h2 className={styles.gridItemTtl}>
                        Доставка бесплатно <br />
                        Букет-подарок руководителю в его День рождения <br />
                        Праздничная ель перед Новым годом
                        </h2>
                    </div>
                </div>

                <div className={styles.workSteps}>
                    <div>
                        <h2 className={styles.workStepsTtl}>этапы работы:</h2>

                        <ol className={styles.workList}>
                            <li className={styles.workStep}>1. Заполнение заявки</li>
                            <li className={styles.workStep}>2. Подписание договора</li>
                            <li className={styles.workStep}>3. Вручение цветов</li>
                            <li className={styles.workStep}>4. Отчет о доставленных заказах</li>
                            <li className={styles.workStep}>5. оплата</li>
                        </ol>
                    </div>
                </div>

                <h2 className={styles.chooseTtl}>Если у Вас единичный заказ, то можете выбрать букет в каталоге либо заказать индивидуальный букет и указать его стоимость, а при оформлении заказа в корзине указать, что оплата будет производиться с расчётного счёта организации.</h2>
            
                <h2 className={styles.formTtl}>заполните заявку:</h2>

                <form className={styles.form} action="">
                    <h2 className={styles.inputTtl}>Наименование организации</h2>
                    <input className={styles.input} type="text" placeholder='Введите наименование вашей организации'/>
                    
                    <h2 className={styles.inputTtl}>Почтовый адрес</h2>
                    <input className={styles.input} type="text" placeholder='Введите почтовый адрес'/>

                    <h2 className={styles.inputTtl}>Контактное лицо</h2>
                    <input className={styles.input} type="text" placeholder='Введите имя контактного лица'/>

                    <h2 className={styles.inputTtl}>Контактный номер телефона</h2>
                    <input className={styles.input} type="text" placeholder='+7 (977) 777-77-77'/>

                    <h2 className={styles.inputTtl}>Стоимость букета сотруднику (если разная – указать)</h2>
                    <input className={styles.input} type="text" placeholder='Укажите стоимость букета сотруднику'/>

                    <h2 className={styles.inputTtl}>Адрес электронной почты</h2>
                    <input className={styles.input} type="text" placeholder='Укажите ваш адрес электронной почты'/>

                    <h2 className={styles.inputTtl}>УНП</h2>
                    <input className={styles.input} type="text" placeholder='УНП'/>

                    <h2 className={styles.inputTtl}>Расчетный счет</h2>
                    <input className={styles.input} type="text" placeholder='Введите номер расчетного счета'/>
                    
                    <h2 className={styles.inputTtl}>Код банка</h2>
                    <input className={styles.input} type="text" placeholder='Код банка'/>

                    <h2 className={styles.inputTtl}>Предполагаемое количество заявок в месяц</h2>
                    <input className={styles.input} type="text" placeholder='Введите предполагаемое количество заявок в месяц'/>

                </form>

                <button className='greenBtn'>отправить</button>
                <p className={styles.policy}>
                    Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии c <Link className={styles.link} to='/'>Политикой конфиденциальности</Link>
                </p>

            </div>

            <Footer />
        </div>
    );
};

export default CorporativeClients;