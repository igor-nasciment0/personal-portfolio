import HeaderMobile from './mobile';
import HeaderDesktop from './desktop';
import { pageProps } from './components';
import { useIsMobile } from '../../util/mediaQueries';

export default function Header({ currentPage, setCurrentPage, setLanguage }: pageProps) {

  const isMobile = useIsMobile();

  return (
    isMobile ?
      <HeaderMobile currentPage={currentPage} setCurrentPage={setCurrentPage} setLanguage={setLanguage}/> :
      <HeaderDesktop currentPage={currentPage} setCurrentPage={setCurrentPage} />
  )
}