import React from 'react'
import styles from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa';

 const Navbar = () => {
    return (
        <div>
            <section className={styles.section} >
                <p>Startup funding without the golden handcuff: see how StartEngine stacks up against venture capital in a <a href="https://www.startengine.com/blog/venture-capital-vs-equity-crowdfunding/"> new blog post</a> </p>  
            </section>
            <div className={styles.navbar} >
                <div className={styles.logo} >
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/02/StartEngine.png" alt="" />
                    <FaSearch className={styles.search} />
                </div>
                <div className={styles.center} >
                    <button>Start Investing</button>
                    <button>Start Investing</button>
                </div>
                <div className={styles.links} >
                    <button>Trade</button>
                    <p>NEW</p>
                    <button>Earn Bonus Shares</button>
                    <button>Blog</button>
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar