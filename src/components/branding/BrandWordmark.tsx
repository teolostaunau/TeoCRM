interface Props {
  className?: string;
}

export default function BrandWordmark({
  className = "",
}: Props) {
  return (
    <span
      className={`
      text-3xl
      font-bold
      tracking-tight
      ${className}
    `}
    >
      <span className="text-slate-900 dark:text-white">
        Teo
      </span>

      <span className="text-blue-600">
        CRM
      </span>
    </span>
  );
}