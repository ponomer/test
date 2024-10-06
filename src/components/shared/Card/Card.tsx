import Content from '../Content/Content';
import EmptyImg from '@assets/emptyImg.svg?react';

import styles from './Card.module.scss';

interface ICardProps {
  title: string,
  text: string,
  coverUrl?: string,
}

export default function Card({
  title,
  text,
  coverUrl,
}: ICardProps) {
  return (
    <Content
      level='h3'
      title={title}
      startDecorator={(
        <div className={styles.card__imageContainer}>
          {coverUrl
            ? <img className={styles.card__image} src={coverUrl} alt={title} loading='lazy' />
            : <EmptyImg/>
          }
        </div>
      )}
      className={styles.card}
    >
      <p>{text}</p>
    </Content>
  )
}