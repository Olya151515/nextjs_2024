import React from 'react';
import Link from "next/link";
import styles from "/src/components/header/styleHeader/HeaderStyle.module.css";

const HeaderComponent = () => {
    return (
        <div className={styles.headerStyle}>
            <ul className={styles.ulStyle}>
                <li className={styles.liStyle}><Link className={styles.liStyle} href={'/'}>home</Link></li>
                <li className={styles.liStyle}><Link className={styles.liStyle} href={'/movies?page=1'}>movies</Link></li>
                <li className={styles.liStyle}><Link className={styles.liStyle} href={'/genres'}>genres</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;