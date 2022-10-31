import React from 'react'
import layerBase from '../../../img/layer-base.png'
import layerMiddle from '../../../img/layer-middle.png'
import layerFront from '../../../img/layer-front.png'
import styles from './Welcome.module.scss'

const Welcome = () => {
    const classBase = styles.layer + ' ' + styles.layer__base;
    const classMiddle = styles.layer + ' ' + styles.layer__middle;
    const classFront = styles.layer + ' ' + styles.layer__front;

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__content}>
                <div className={styles.welcome__text}>
                    <div className={styles.welcome__subtitle}>
                        Welcome to parallax
                    </div>
                    <div className={styles.welcome__title}>
                        FAIRY FOREST
                    </div>
                </div>
                <div className={styles.welcome__layers}>
                    <div className={classBase} style={{ backgroundImage: `url(${layerBase})` }}></div>
                    <div className={classMiddle} style={{ backgroundImage: `url(${layerMiddle})` }}></div>
                    <div className={classFront} style={{ backgroundImage: `url(${layerFront})` }}></div>
                </div>
            </div>
        </div>
    )
}

export default Welcome