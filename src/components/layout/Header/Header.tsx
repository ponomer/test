import {MouseEvent, PropsWithChildren} from 'react';
import {Logo} from '@components/shared';
import clsx from 'clsx';

import styles from './Header.module.scss';

interface IHeaderProps extends PropsWithChildren {
  isCollapsed: boolean,
  isMobile: boolean,
  handleOpen: VoidFunction,
  handleClose: VoidFunction
}

export default function Header({isCollapsed, isMobile, handleOpen, handleClose, children}: IHeaderProps) {
  const onOpen = (evt: MouseEvent) => {
    evt.stopPropagation();
    handleOpen();
  }

  return (
    <div className={styles.header__wrapper}>
      <header
        className={clsx(styles.header, isCollapsed && styles.header_collapsed)}
        onClick={handleClose}
      >
        <div className={styles.toogleButton__container}>
          {(!isMobile && isCollapsed) && (
            <div
              className={styles.toogleButton}
              onClick={onOpen}
            />
          )}
        </div>
        <nav className={styles.nav}>
          <Logo
            className={clsx(styles.logo, isCollapsed && styles.logo_collapsed)}
            {...isMobile && {onClick: onOpen}}
          />
          <ul className={clsx(styles.main__nav, isCollapsed && styles.main__nav_collapsed)}>
            <li className={clsx(isCollapsed && styles.navListItem_collapsed)}>
              <a href="#">
                ☲
                <span className={clsx(isCollapsed && styles.navLink_collapsed)}>&nbsp;Home</span></a>
            </li>
            <li className={clsx(isCollapsed && styles.navListItem_collapsed)}>
              <a href="#">
                ☳
                <span className={clsx(isCollapsed && styles.navLink_collapsed)}>&nbsp;All Blog Topics</span>
              </a>
            </li>
            <li className={clsx(isCollapsed && styles.navListItem_collapsed)}>
              <a href="#">
                ☵
                <span className={clsx(isCollapsed && styles.navLink_collapsed)}>&nbsp;About</span>
              </a>
            </li>
            <li className={clsx(isCollapsed && styles.navListItem_collapsed)}>
              <a href="#">
                ☷
                <span className={clsx(isCollapsed && styles.navLink_collapsed)}>&nbsp;Contacts</span>
              </a>
            </li>
          </ul>
          <div className={clsx(isCollapsed && styles.collapsChild)}>
            {children}
          </div>
        </nav>
      </header>
    </div>
  )
}
