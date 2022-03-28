import React from 'react';
import styles from './experience.module.css';
import { ImRedo2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';

function PageExperience(props) {
   const { title, essence, pImg, link } = props;
   const { t } = useTranslation();
   return (
      <div className={styles.contExpPage}>
         <div className={styles.expPage}>
            <div className={styles.project}>
               <h1>{title}</h1>
               <p>{essence}</p>
               <div className={styles.line}></div>
               <h2>{t('experience.implement')}</h2>
               <p>{t('experience.description')}</p>
               <div className={styles.logos}>
                  <img src='/revenuecat.svg' alt='revenucat.svg' />
                  <img src='/stripe.svg' alt='stripe.svg' />
               </div>
               <div className={styles.line2}></div>
            </div>
            <div className={styles.imgProject}>
               <div className={styles.imgCont}>
                  <img height='400px' src={pImg} alt='profile-picture' />
               </div>
               <div className={styles.contLabels}>
                  <div className={styles.labels}>
                     <h2>{t('experience.position')}</h2>
                     <p>Full Stack Developer</p>
                  </div>
                  <div className={styles.labels}>
                     <h2 className={styles.hidden}>{t('experience.duration')}</h2>
                     <p className={styles.hidden}>4 {t('experience.months')}</p>
                  </div>
                  <a href={link} target='_blank' rel='noreferrer'>
                     {t('experience.goSite')}
                     <ImRedo2 />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PageExperience;
