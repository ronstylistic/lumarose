export default function SectionCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <a href={link} className="card hover:shadow-xl transition block">
      <h3 className="text-xl font-semibold text-rose-dark">{title}</h3>
      <p className="text-rose mt-2 mb-6">{desc}</p>
      <span className="text-rose-dark font-bold hover:underline">
        Learn More →
      </span>
    </a>
  );
}
