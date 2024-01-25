import { MdPlayCircleFilled, MdSystemSecurityUpdateGood } from "react-icons/md";
import styles from "./rightbar.module.css";
const RightBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>Lorem ipsum dolor sit amet.</h3>
          <span className={styles.notification}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
            quas error quo aliquid! Molestiae, a modi. Nesciunt, numquam at.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>Lorem ipsum dolor sit amet.</h3>
          <span className={styles.notification}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
            quas error quo aliquid! Molestiae, a modi. Nesciunt, numquam at.
          </p>
          <button className={styles.button}>
            <MdSystemSecurityUpdateGood />
            Learn
          </button>
        </div>
      </div>
    </>
  );
};

export default RightBar;
