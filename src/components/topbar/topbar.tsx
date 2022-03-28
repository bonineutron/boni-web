import styles from './topbar.module.scss';
import { useState, useEffect, useRef } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Language } from '../../shared/enums/language.enum';

export default function Topbar() {
   // configuration for language change
   const { t, i18n } = useTranslation();
   const [language, setLanguage] = useState<Language>(Language.spanish);
   useEffect(() => {
      i18n.changeLanguage(language);
   }, [language]);
   const changeLanguageEn = () => {
      setLanguage(Language.english);
      setPopUp(false);
   };
   const changeLanguageEs = () => {
      setLanguage(Language.spanish);
      setPopUp(false);
   };
   // configuration for pop-up visibility
   const [popUp, setPopUp] = useState<boolean>(false);
   const popUpRef = useRef<HTMLDivElement>();
   useEffect(() => {
      document.addEventListener('click', (event: any) => {
         if (!popUpRef.current.contains(event.target)) {
            setPopUp(false);
         }
      });
   });
   return (
      <div className='topbar absolute h-[70px] md:h-[100px] w-[100vw] z-10'>
         <div className='h-full flex justify-between items-center max-w-[1400px] mx-auto px-[20px]'>
            <img className='h-[40px] md:h-[50px]' src='/logoTopbar.svg' />
            <div className='flex'>
               <a
                  className='h-[40px] md:h-[50px] px-[10px] flex items-center text-[26px] md:text-[35px] border-2 border-black rounded-[4px] hover:bg-black hover:text-white mr-2'
                  href='https://github.com/bonineutron/boni-web'
                  target='_blank'
                  rel='noreferrer'>
                  <p className='text-[18px] md:text-[24px] mr-2'>{t('topbar.code').toUpperCase()} </p>
                  <FaGithubSquare />
               </a>
               <div ref={popUpRef} className='relative'>
                  <button
                     onClick={() => setPopUp((isOpen) => !isOpen)}
                     className='h-[40px] md:h-[50px] px-3 flex flex-col items-center justify-center rounded-[4px] bg-white shadow-[2px_2px_5px_2px_rgba(0,0,0,0.1)]'>
                     <div className={`${language === Language.spanish ? 'flex' : 'hidden'} items-center`}>
                        <img src='/cop.jpg' className='h-[20px] rounded-full mr-1' alt='spanish' />
                        <p className='text-[14px]'>ES</p>
                     </div>
                     <div className={`${language === Language.english ? 'flex' : 'hidden'} items-center`}>
                        <img src='/usd.jpg' className='h-[20px] rounded-full mr-1' alt='english' />
                        <p className='text-[14px]'>EN</p>
                     </div>
                  </button>
                  <div
                     className={`${
                        !popUp && 'hidden'
                     } absolute h-[80px] w-[140px] flex flex-col bg-white rounded-[4px] top-12 md:top-14 right-0 text-[16px] shadow-[2px_2px_5px_2px_rgba(0,0,0,0.1)]`}>
                     <button
                        onClick={changeLanguageEn}
                        className='flex h-[40px] items-center justify-center border-b-[1px] border-black/10'>
                        <img src='/usd.jpg' className='h-[20px] rounded-full mr-1' alt='english' />
                        <p>{t('topbar.english').toUpperCase()}</p>
                     </button>
                     <button onClick={changeLanguageEs} className='flex h-[40px] items-center justify-center'>
                        <img src='/cop.jpg' className='h-[20px] rounded-full mr-1' alt='spanish' />
                        <p>{t('topbar.spanish').toUpperCase()}</p>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
