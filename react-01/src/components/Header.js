import AnnouncementBar from './AnnouncementBar';
import Logo from './Logo';
import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <AnnouncementBar />
      <div className="site-header__inner">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
