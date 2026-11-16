import { summary } from '../data/resume.js';
import SectionHead from './SectionHead.jsx';
import useReveal from '../hooks/useReveal.js';

// Turns **text** into <strong>text</strong>
function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="reveal" ref={ref}>
      <SectionHead number="01" title="About" />
      <div className="card about">
        <p>{renderBold(summary)}</p>
      </div>
    </section>
  );
}
