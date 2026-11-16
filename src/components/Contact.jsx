import { contact, profile } from '../data/resume.js';
import useReveal from '../hooks/useReveal.js';

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="reveal" ref={ref}>
      <div className="cta">
        <div>
          <h2>{contact.heading}</h2>
          <p>{contact.message}</p>
        </div>
        <div className="contact">
          <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
