import { profile, stats } from '../data/resume.js';
import { MailIcon, LinkedInIcon, DownloadIcon } from './Icons.jsx';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow">{profile.location}</div>
        <h1>{profile.name}</h1>
        <p className="role">
          <strong>{profile.title}</strong> {profile.tagline}
        </p>

        <div className="contact">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <button type="button" className="btn print-btn" onClick={() => window.print()}>
            <DownloadIcon /> Download PDF
          </button>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
