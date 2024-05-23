import HeaderMobile from './mobile';
import HeaderDesktop from './desktop';
import { pageProps } from './components';
import { useIsMobile } from '../../util/mediaQueries';

export default function Header({ currentPage, setLanguage }: pageProps) {

  const isMobile = useIsMobile();

  return (
    isMobile ?
      <HeaderMobile currentPage={currentPage} setLanguage={setLanguage}/> :
      <HeaderDesktop currentPage={currentPage} />
  )
}