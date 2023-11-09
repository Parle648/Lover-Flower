import React from 'react';
import styles from './styles/orederCall.module.scss';
import background from '../../img/call-modal-background.png';
import close from '../../img/close-btn.svg';
import HaveQuestionForm from '../HaveQuestionForm/HaveQuestionForm';

const CallOrder = () => {
    const [visible, setVisible] = React.useState(false);

    const openModal = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.container}>
            <div className={styles.trigger} onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.9997 14.6667C13.551 14.6667 13.9997 14.218 13.9997 13.6667V11.3333C13.9997 10.782 13.551 10.3333 12.9997 10.3333C12.2197 10.3333 11.453 10.2107 10.7197 9.96867C10.5444 9.91331 10.3573 9.90659 10.1785 9.94921C9.99971 9.99183 9.83582 10.0822 9.70434 10.2107L8.74434 11.1707C7.08508 10.2699 5.72236 8.90762 4.82101 7.24867L5.77301 6.29067C6.04767 6.036 6.14634 5.64867 6.02901 5.276C5.7875 4.54153 5.66506 3.77315 5.66634 3C5.66634 2.44867 5.21767 2 4.66634 2H2.33301C1.78167 2 1.33301 2.44867 1.33301 3C1.33301 9.43333 6.56634 14.6667 12.9997 14.6667ZM2.33301 2.66667H4.66634C4.75475 2.66667 4.83953 2.70179 4.90204 2.7643C4.96456 2.82681 4.99967 2.91159 4.99967 3C4.99967 3.85133 5.13301 4.68733 5.39501 5.48C5.41426 5.53752 5.41651 5.59937 5.40149 5.65814C5.38647 5.71691 5.35483 5.7701 5.31034 5.81133L4.00634 7.122C5.09767 9.274 6.70967 10.886 8.87167 11.9867L10.171 10.6867C10.2153 10.6428 10.2708 10.6118 10.3314 10.597C10.392 10.5822 10.4554 10.5842 10.515 10.6027C11.3123 10.8667 12.1483 11 12.9997 11C13.183 11 13.333 11.15 13.333 11.3333V13.6667C13.333 13.85 13.183 14 12.9997 14C6.93434 14 1.99967 9.06533 1.99967 3C1.99967 2.91159 2.03479 2.82681 2.09731 2.7643C2.15982 2.70179 2.2446 2.66667 2.33301 2.66667Z" fill="#43FFD2"/>
                </svg>
                <span className={styles.span}>заказать звонок</span>
            </div>

            <div className={`${styles.popUp} ${visible && styles.unvisible}`}>
                <img className={styles.background} src={background} alt="background" />
                <img className={styles.close} src={close} alt="background" onClick={openModal}/>
                <h2 className={styles.ttl}>заказать звонок</h2>
                <p className={styles.paragraph}>
                    Впишите свои данные, и мы свяжемся с Вами. Ваши данные ни при каких обстоятельствах не будут переданы третьим лицам.
                </p>
                <HaveQuestionForm />
            </div>
        </div>
    );
};

export default CallOrder;