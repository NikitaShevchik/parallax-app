import React from 'react';
import background from '../../../img/dungeon.jpg'
import styles from './Article.module.scss';

const Article = () => {
    return (
        <div className={styles.article} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.article__content}>
                <div className={styles.article__text}>
                    <h2 className={styles.article__title}>
                        To be continued
                    </h2>
                    <p className={styles.article__paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptates expedita quibusdam nihil sequi tempore doloribus odit eaque suscipit, consequatur repellat! Consequuntur accusamus corporis quis enim perferendis! Excepturi, aliquid itaque.</p>
                </div>
            </div>
            <div className={styles.article__copyright}>
                © Nikita Shevchik
            </div>
        </div>
    )
}

export default Article