import { education } from '../data/resume.js';
import SectionHead from './SectionHead.jsx';
import { GraduationIcon, AwardIcon } from './Icons.jsx';
import useReveal from '../hooks/useReveal.js';

const icons = { graduation: GraduationIcon, award: AwardIcon };

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="reveal" ref={ref}>
      <SectionHead number="04" title="Education & Certification" />
      <div className="duo">
        {education.map((e) => {
          const Icon = icons[e.icon] ?? AwardIcon;
          return (
            <div className="card" key={e.title}>
              <div className="badge-icon"><Icon /></div>
              <h3>{e.title}</h3>
              <p>{e.detail}</p>
              <span className="tag">{e.tag}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
