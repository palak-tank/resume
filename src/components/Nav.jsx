import { navLinks } from '../data/resume.js';

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <a href="#top" className="logo">Palak<span>.</span>Tank</a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
