import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import styles from './Navbar.module.scss'
import React, { useRef } from 'react'

export default function Navbar({ showNav, 
                                navIsAtTop, 
                                showHamburgerMenu,
                                handleChecked }) {
    // console.log("show?", showNav)
    const class1 = showNav? styles.navbar_active: styles.navbar_hidden
    const class2 = navIsAtTop? styles.navbar_at_top: styles.navbar_shadow

    return (
        <div>
            <div className={styles.overlay}></div>
            <nav id="navbar" className={class1 + ' ' + class2 + ' ' + styles.navbar}>
                <img src="/logo.svg" alt="" className={styles.logo}/>
                <div className={styles.navbar_wrapper}>
                    <ol className={styles.navbar_ordered_list}>
                        <li className={styles.active_item + ' ' + styles.navbar_list}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={styles.navbar_list}>
                            <Link href="/#project">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li className={styles.navbar_list}>
                            <Link href="/#about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className={styles.navbar_list}>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ol>
                    <Link href="/">
                        <a className={styles.resume_button}>Resume</a>
                    </Link>
                </div>
                <div className={styles.hamburger_button}>
                    <input type="checkbox" onClick={handleChecked}/>
                    
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul className={styles.hamburger_menu}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}