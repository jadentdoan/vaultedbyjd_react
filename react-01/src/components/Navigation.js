import './Navigation.css';

const links = [
  { label: 'Home', href: '#', current: true },
  { label: 'Services', href: '#' },
  { label: 'The Vault', href: '#' },
  { label: 'Live Shows', href: '#' },
  { label: 'About', href: '#' },
];

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map((link) => (
          <li className="navigation__item" key={link.label}>
            <a
              className={link.current ? 'navigation__link current' : 'navigation__link'}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
