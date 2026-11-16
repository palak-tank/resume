export default function SectionHead({ number, title }) {
  return (
    <div className="section-head">
      <span className="num">{number}</span>
      <h2>{title}</h2>
      <span className="rule" />
    </div>
  );
}
