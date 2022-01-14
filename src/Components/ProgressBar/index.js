import React from "react";
import styles from "./styles.module.css";

const ProgressBar = ({ bgColor, completed }) => {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.progress} style={{ backgroundColor: bgColor, width: `${completed}%` }}>
                {/* <span className={styles.percentage}>{`${completed}%`}</span> */}
            </div>
        </div>
        <div>
            <progress max="12" value="4" ></progress>
        </div>
        </>
    );
};

export default ProgressBar;