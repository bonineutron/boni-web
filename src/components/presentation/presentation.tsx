import styles from './presentation.module.css';
import { DiJavascript1 } from 'react-icons/di';
import { SiJava } from 'react-icons/si';
import { IoLogoPython, IoLogoWhatsapp } from 'react-icons/io';
import { BiGitBranch } from 'react-icons/bi';
import { BsMailbox2 } from 'react-icons/bs';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

function PageProfile(props) {
   const { pImg } = props;
   const { t } = useTranslation();
   return (
      <div className={styles.contProPage}>
         <div className={styles.ProPage}>
            <div className={styles.presentation}>
               <div className={styles.boniText}>
                  <h2>{t('presentation.hello')}</h2>
                  <h1>Andres Bonilla</h1>
                  <h2>{t('presentation.subtitle')}</h2>
                  <div></div>
                  <p>{t('presentation.description')}</p>
               </div>
               <div className={styles.boxContact}>
                  <a className={styles.contact} href='mailto:mailofbonilla@gmail.com' target='_blank' rel='noreferrer'>
                     <p>{t('presentation.contactMe')}</p>
                     <BsMailbox2 className={styles.mail} />
                  </a>
                  <a
                     className={styles.whats}
                     href='https://api.whatsapp.com/send?phone=573203604288'
                     target='_blank'
                     rel='noreferrer'>
                     <IoLogoWhatsapp />
                  </a>
               </div>
               <div className={styles.line2}></div>
            </div>
            <div className={styles.contProfile}>
               <img src={pImg} alt='profile-picture' />
               <div className={styles.barsExp}>
                  <div className={styles.bar}>
                     <SiJava />
                     <div className={styles.progress}>
                        <div className={styles.color2}></div>
                     </div>
                  </div>
                  <div className={styles.bar}>
                     <DiJavascript1 />
                     <div className={styles.progress}>
                        <div className={styles.color1}></div>
                     </div>
                  </div>
                  <div className={styles.bar}>
                     <IoLogoPython />
                     <div className={styles.progress}>
                        <div className={styles.color3}></div>
                     </div>
                  </div>
                  <div className={styles.bar}>
                     <AiOutlineConsoleSql />
                     <div className={styles.progress}>
                        <div className={styles.color4}></div>
                     </div>
                  </div>
                  <div className={styles.bar}>
                     <BiGitBranch />
                     <div className={styles.progress}>
                        <div className={styles.color5}></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PageProfile;
