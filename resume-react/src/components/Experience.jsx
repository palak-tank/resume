import { useEffect, useState } from 'react';
import { experience } from '../data/resume.js';
import SectionHead from './SectionHead.jsx';
import Job from './Job.jsx';
import useReveal from '../hooks/useReveal.js';

export default function Experience() {
  const headRef = useReveal();
  const [printing, setPrinting] = useState(false);

  // Expand every "More responsibilities" section while printing to PDF
  useEffect(() => {
    const before = () => setPrinting(true);
    const after = () => setPrinting(false);
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);

  return (
    <section id="experience">
      <div className="reveal" ref={headRef}>
        <SectionHead number="03" title="Experience" />
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <Job key={job.company} job={job} printing={printing} />
        ))}
      </div>
    </section>
  );
}
