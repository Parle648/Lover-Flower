import HaveQuestionForm from '../../features/HaveQuestionForm/HaveQuestionForm';
import styles from './styles/contsctsSendBlock.module.scss';

const ContactsSendBlock = () => {
    return (
        <div className={styles.sendUsBlock}>
            <div className={styles.ttls}>
                <h2 className={styles.sendUsFirstTtl}>напишите</h2>
                <h2 className={styles.sendUsSecondTtl}>нам</h2>
            </div>
            <div className={styles.sendRequestBlock}>
                <p className={styles.sendRequestParagraph}>
                    Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной 
                    связи, и наш специалист свяжется с вами в течение 15 минут.
                </p>
                <HaveQuestionForm />
            </div>
        </div>
    );
};

export default ContactsSendBlock;