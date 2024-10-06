import {useState} from 'react';
import {Content, Card, ArticleSubNav, ArticleDescription, Slider} from '@components/shared';
import {Header, Main, Footer} from '@components/layout';
import {mockCards, mockArticles} from './mockData'
import clsx from 'clsx';

import styles from './App.module.scss';

function App() {
  const isMobile = window.screen.width <= 430;
  const [isNavCollapsed, setIsNavCollapsed] = useState(isMobile);

  return (
    <>
      <div className={styles.layout__content}>
        <Header
          isCollapsed={isNavCollapsed}
          isMobile={isMobile}
          handleOpen={() => setIsNavCollapsed(false)}
          handleClose={() => setIsNavCollapsed(true)}
        >
          <ArticleSubNav article={mockArticles}/>
        </Header>
        <Main>
          <div className={clsx(styles.title__container, isNavCollapsed && styles.title__container_collapsed)}>
            <h1>Article Title.</h1>
          </div>
          <ArticleDescription/>
          {mockArticles.map(({title, content}) => (
            <Content id={title} level='h2' title={title} key={title}>
              {content.map(({title, text}) => (
                <p id={title} key={title}>{text}</p>
              ))}
            </Content>
          ))}
          <Content title='Suggested posts'>
            <Slider
              slides={mockCards}
              renderSlide={({id, title, text}) => (
                <Card
                  key={id}
                  title={title}
                  text={text}
                />
              )}
            />
          </Content>
        </Main>
      </div>
      <Footer/>
    </>
  )
}

export default App
