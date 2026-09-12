export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="font-mono text-sm text-teal">{index}</span>
        )}
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper-100 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-amber to-transparent" />
      {description && (
        <p className="mt-4 text-paper-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
