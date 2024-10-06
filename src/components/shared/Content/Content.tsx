import {PropsWithChildren} from 'react';
import clsx from 'clsx';

import styles from './Content.module.scss';

interface IContentProps extends PropsWithChildren {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string,
  id?: string,
  startDecorator?: JSX.Element,
  className?: string,
}

export default function Content({
  level: Heading = 'h3',
  title,
  id = '',
  startDecorator,
  children,
  className,
}: IContentProps) {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      {startDecorator}
      <Heading className={styles.section__title}>{title}</Heading>
      {children}
    </section>
  )
}