import EmptyImgIcon from '@assets/emptyImg.svg?react';

import styles from './ArticleDescription.module.scss';

interface IArticleDescriptionProps {
  imgSrc?: string,
}

export default function ArticleDescription({imgSrc}: IArticleDescriptionProps) {
  return (
    <section className={styles.articleDescription}>
      {imgSrc
        ? <img className={styles.descImg} src={imgSrc} alt={''} loading='lazy' />
        : <EmptyImgIcon/>
      }
      <div className={styles.desc}>
        <h2>
          <span className={styles.desc__title}>Article description.</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h2>
      </div>
    </section>
  )
}
