import styles from './links-contact.module.css';
import { GiClick } from 'react-icons/gi';
import { AiOutlineLinkedin, AiOutlineGitlab, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

function LinksContact() {
   return (
      <div className={styles.linksContact}>
         <div className={styles.contLinksC}>
            <div className={styles.listLinks}>
               <a href='https://www.instagram.com/i.am.mr.boni/' target='_blank' rel='noreferrer'>
                  <AiOutlineInstagram />
               </a>
               <a href='https://www.linkedin.com/in/bonineutron/' target='_blank' rel='noreferrer'>
                  <AiOutlineLinkedin />
               </a>
               <a href='https://github.com/BoniNeutron' target='_blank' rel='noreferrer'>
                  <AiOutlineGithub />
               </a>
               <a href='https://gitlab.com/BoniNeutron' target='_blank' rel='noreferrer'>
                  <AiOutlineGitlab />
               </a>
               <div className={styles.lineAbsolute}></div>
            </div>
            <div className={styles.mailAbsolute}>
               <a href='mailto:mailofbonilla@gmail.com' rel='noreferrer'>
                  mailofbonilla@gmail.com
                  <GiClick className={styles.click} />
               </a>
               <div className={styles.lineAbsolute}></div>
            </div>
         </div>
      </div>
   );
}

export default LinksContact;
