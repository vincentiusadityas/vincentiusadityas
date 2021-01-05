import styles from './Contact.module.scss'
import Link from 'next/link'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
    return(
        <>
            <section id="contact" className={styles.contact}>
                <div className={styles.title}>CONTACT</div>
                <div className={styles.contact_content}>
                    <h2>Let's get in touch!</h2>
                    <p>I am currently open and looking for new opportunities.
                    Whether you have any inquiries or just want to say hi, 
                    feel free to contact me through my email or my socials! :)</p>
                </div>
                <a href="mailto: vasundjaja@gmail.com" className={styles.email_button}>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> E-mail Me 
                </a>
            </section>
        </>
    )
}