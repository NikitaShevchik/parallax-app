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
                    <p className={styles.article__paragraph}>
                        Данный сайт был сделан для подробного изучения такого явления как паралакс. Изучение добавления картинок в форматах пнг. Изменение различных индексов. Статическое изменение размеров шрифта в зависимости от размера устройства, изменение скорости прокрутки для разных элементов и изменение размеров элементов в зависимости от экрана. Сайт полностью адаптивный.
                    </p>
                </div>
            </div>
            <div className={styles.article__copyright}>
                © Nikita Shevchik
            </div>
        </div>
    )
}

export default Article