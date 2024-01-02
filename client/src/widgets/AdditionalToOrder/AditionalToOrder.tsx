import styles from './styles/aditionalToOrder.module.scss';

const AditionalToOrder = () => {
    return (
        <div>
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
        </div>
    );
};

export default AditionalToOrder;