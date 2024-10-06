import {MouseEvent} from 'react';
import LogoIcon from '@assets/logo.svg?react';
import clsx from 'clsx'

import styles from './Logo.module.scss';

interface ILogoProps {
  className?: string,
  onClick?: (evt: MouseEvent) => void
}

export default function Logo({className, onClick}: ILogoProps) {
  return (
    <div className={clsx(styles.logo__container, className)} onClick={onClick}>
      <div className={styles.logoImg__container}>
        <LogoIcon/>
      </div>
      <h3 className={styles.logo__name}>AWESOME BLOG</h3>
    </div>
  )
}