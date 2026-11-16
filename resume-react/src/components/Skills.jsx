import { skills } from '../data/resume.js';
import SectionHead from './SectionHead.jsx';
import useReveal from '../hooks/useReveal.js';

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="reveal" ref={ref}>
      <SectionHead number="02" title="Skills" />
      <div className="skills">
        {skills.map((s) => (
          <div className="card" key={s.group}>
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
