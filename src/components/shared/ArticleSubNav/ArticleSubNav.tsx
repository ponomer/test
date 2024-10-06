import {Fragment} from 'react';
import {Content} from '@components/shared'
import {mockArticles} from '../../../mockData';

import styles from './ArticleSubNav.module.scss';

interface IArticleSubNavProps {
  article: typeof mockArticles
}

export default function ArticleSubNav({article}: IArticleSubNavProps) {
  return (
    <Content title='Article content' className={styles.article}>
      <ol className={styles.article__nav}>
        {article.map(({title, content}) => (
          <Fragment key={title}>
            <li key={title} className={styles.article__nav__item}>
              <a href={`#${title}`}>{title}</a>
            </li>
            {content.length > 1 && (
              <ol className={styles.article__nav}>
                {content.map(({title}) => (
                  <li key={title} className={styles.article__nav__item}>
                    <a href={`#${title}`}>{title}</a>
                  </li>
                ))}
              </ol>
            )}
          </Fragment>
        ))}
      </ol>
    </Content>
  )
}
