import useReveal from '../hooks/useReveal.js';

export default function Job({ job, printing }) {
  const ref = useReveal();
  return (
    <article className="job card reveal" ref={ref}>
      <div className="job-top">
        <h3>{job.role}</h3>
        <span className="period">{job.period}</span>
      </div>
      <div className="meta">
        <b>{job.company}</b> · {job.location}
      </div>
      <div className="highlights">
        {job.tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <ul>
        {job.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      {job.more?.length > 0 && (
        <details className="more" open={printing || undefined}>
          <summary>More responsibilities</summary>
          <ul>
            {job.more.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </details>
      )}
    </article>
  );
}
