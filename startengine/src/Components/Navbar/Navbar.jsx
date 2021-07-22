import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <section className={styles.section}>
        <p>
          Startup funding without the golden handcuff: see how StartEngine
          stacks up against venture capital in a{" "}
          <a href="https://www.startengine.com/blog/venture-capital-vs-equity-crowdfunding/">
            {" "}
            new blog post
          </a>{" "}
        </p>
      </section>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/02/StartEngine.png"
            alt=""
          />
          <div className={styles.icon}>
            <FaSearch className={styles.search} />
           <FaBars onClick={handleClicked} className={styles.hamburger}/>
          </div>
        </div>
        <div className={ clicked? styles.center:styles.container}>
          <button>Start Investing</button>
          <button>Get Funding</button>
          <button>Trade</button>
          <button>Earn Bonus Shares</button>
          <button>Blog</button>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
