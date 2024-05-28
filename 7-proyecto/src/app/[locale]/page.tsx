import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('home');
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
    <div>
      <h1 className="text-4xl mb-4">{t('title')}</h1>
      <p className="text-lg">{t('description')}</p>
    </div>
  </div>
  )
}