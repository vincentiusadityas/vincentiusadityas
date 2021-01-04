import styles from './Home.module.scss'
import Link from 'next/link'

export default function Home() {
    return(
        <>
            <section className={styles.home}>
                <div className="row justify-content-md-center align-items-center">
                    <div className="col-md-7">
                        <div className={styles.welcome_message}>
                            Hello and Welcome!
                        </div>
                        <div className={styles.my_name}>
                            My name is <span>Vincent.</span>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.descr_1}>
                                A software engineer in the making.
                            </p>
                            <p className={styles.descr_2}>
                                Looking to create more exciting projects.
                            </p>
                            <p className={styles.descr_3}>
                                Loves playing badminton and working out.
                            </p>
                        </div>
                        <Link href="/">
                            <a className={styles.resume_button}>View My Resume</a>
                        </Link>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/avatar.png" className={styles.avatar}/>
                    </div>
                </div>
            </section>
        </>
    )
}