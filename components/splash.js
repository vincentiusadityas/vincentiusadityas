import styles from './Splash.module.scss'

export default function Flash() {
    return (
        <div className={styles.splash}>
            <span className={styles.splash_logo}>
                <img src="/logo.svg" alt="" className={styles.logo}/>
            </span>
            <span className={styles.splash_svg}>
                <svg width="100%" height="100%">
                    <rect width="100%" height="100%" />
                </svg>
            </span>
            <span className={styles.splash_minimize}>
                <svg width="100%" height="100%">
                    <rect width="100%" height="100%" />
                </svg>
            </span>
        </div>
    )
}