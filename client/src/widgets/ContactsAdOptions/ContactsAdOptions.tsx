import styles from './styles/contactAdOptions.module.scss';

const ContactsAdOptions = () => {
    return (
        <div className={styles.aditionalOptions}>
            <div className={styles.option}>
                <h2 className={styles.ttlOption}>время работы</h2>
                <p className={styles.paragraphOption}>
                    с 10:00 до 21:00 без выходных
                </p>
            </div>
            <div className={styles.option}>
                <h2 className={styles.ttlOption}>Адрес</h2>
                <p className={styles.paragraphOption}>
                    г. Минск, ул. Тимирязева 67, комн. 112
                </p>
            </div>
            <div className={styles.option}>
                <h2 className={styles.ttlOption}>Телефон</h2>
                <p className={styles.paragraphOption}>
                    +375 (29) 113-69-69
                </p>
            </div>
            <div className={styles.option}>
                <h2 className={styles.ttlOption}>E-mail</h2>
                <p className={styles.paragraphOption}>
                    zakaz@loverflower.by
                </p>
            </div>
        </div>
    );
};

export default ContactsAdOptions;