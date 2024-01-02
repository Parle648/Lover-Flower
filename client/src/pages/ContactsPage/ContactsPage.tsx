import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';
import background from '../../img/contacts-background.png';
import backgroundMobile from '../../img/contacts-mobile-background.png';
import styles from './styles/contactPage.module.scss';
import ContactsAdOptions from '../../widgets/ContactsAdOptions/ContactsAdOptions';
import ContactsSendBlock from '../../widgets/ContactsSendBlock/ContactsSendBlock';

const ContactsPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="background" />

            <div className={styles.wrapper}>
                <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/contacts'>контакты</a></span>
                <h2 className={styles.mainTtl}>контакты</h2>

                <ContactsAdOptions />
                <ContactsSendBlock />

                <h2 className={styles.mapTtl}>Мы на карте</h2>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.351187614965!2d27.509104182623993!3d53.92550442900918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc56c6ea920cb%3A0x8c0a1b9140de5cd8!2sTeachMeSkills!5e0!3m2!1sru!2sfr!4v1698740900591!5m2!1sru!2sfr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <Footer />
        </div>
    );
};

export default ContactsPage;