"use client";

import styles from './navigation.module.css';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navigation() {
    const path = usePathname();
    console.log(path)
  return (
    <nav className={styles.navWrap}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
            </li>
            <li className={styles.navItem}>
                <Link href="/about">About Us</Link> {path === "/about" ? "🔥" : ""}
            </li>
        </ul>
    </nav>
  )
}
