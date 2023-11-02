import React from 'react';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

import styles from './styles/FAQ.module.scss';

import background from '../../img/faq-background.png';

const FAQPage = () => {

    function toggleOpened(event: React.MouseEvent<HTMLElement>) {
        const currentTarget = event.currentTarget as HTMLElement;
        const nextSibling = currentTarget.nextElementSibling as HTMLElement | null;
        const firstChild = currentTarget.firstElementChild as HTMLElement | null;
      
        if (nextSibling) {
          nextSibling.classList.toggle(styles.paragraphDisabled);
        }
      
        if (firstChild) {
          if (firstChild.innerHTML === '+') {
            firstChild.innerHTML = '-';
          } else {
            firstChild.innerHTML = '+';
          }
        }
      }

    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={background} alt="" />
            <div className={styles.wrapper}>
                <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/questions'>faq</a></span>
                <h2 className={styles.ttl}>faq</h2>

                <div className={styles.questionBlock}>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}> БУДЕТ ЛИ ЗАКАЗАННЫЙ БУКЕТ В ТОЧНОСТИ СООТВЕТСТВОВАТЬ ЕГО ИЗОБРАЖЕНИЮ НА САЙТЕ? <span className={styles.openCharacter}>+</span></h2>
                        <p className={styles.questionParagraph}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}>КАК ДОЛГО СТОЯТ БУКЕТЫ ИЗ СУХОЦВЕТОВ? <span className={styles.openCharacter}>+</span></h2>
                        <p className={`${styles.questionParagraph} ${styles.paragraphDisabled}`}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}>ДЕЛАЕТЕ ЛИ ВЫ ФОТО ГОТОВОГО БУКЕТА ПЕРЕД ОТПРАВКОЙ? <span className={styles.openCharacter}>+</span></h2>
                        <p className={`${styles.questionParagraph} ${styles.paragraphDisabled}`}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}>А СКОЛЬКО ДОЛЖНЫ ПРОСТОЯТЬ ЦВЕТЫ В БУКЕТЕ? <span className={styles.openCharacter}>+</span></h2>
                        <p className={`${styles.questionParagraph} ${styles.paragraphDisabled}`}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}>ЕСТЬ ЛИ ДОСТАВКА ЗА ПРЕДЕЛЫ МКАД? <span className={styles.openCharacter}>+</span></h2>
                        <p className={`${styles.questionParagraph} ${styles.paragraphDisabled}`}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}>КАК ОПРЕДЕЛИТЬ СВЕЖИЕ ЛИ ЦВЕТЫ? <span className={styles.openCharacter}>+</span></h2>
                        <p className={`${styles.questionParagraph} ${styles.paragraphDisabled}`}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h2 className={styles.questionTtl} onClick={toggleOpened}>ЧЕМ ОТЛИЧАЕТСЯ БЕЛОРУССКАЯ РОЗА ОТ ИМПОРТНОЙ? <span className={styles.openCharacter}>+</span></h2>
                        <p className={`${styles.questionParagraph} ${styles.paragraphDisabled}`}>
                            Букет собирается по индивидуальной матрице букета. Однако возможны случаи, когда нет необходимых цветов либо имеющиеся цветы отличаются от представленных 
                            на фото, и с согласования заказчика они могут быть заменены на аналогичные. Либо если флорист считает, что данные изменения не повлекут сильного изменения 
                            в образе букета, то самостоятельно может заменить некоторые цветы. И перед отправкой направляется фото заказчику, который утверждает получившийся букет. 
                            Каждый цветок отличается от другого, как и каждый букет будет индивидуальным, но в этом и есть его прелесть… в индивидуальности.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQPage;