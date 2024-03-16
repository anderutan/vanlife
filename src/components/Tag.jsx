export default function Tag({ type }) {
  const tagBaseCSS =
    'text-sm px-4 py-1 capitalize rounded inline-block -mt-4 text-white';
  const tagColor =
    type === 'simple'
      ? 'bg-orange-600'
      : type === 'rugged'
      ? 'bg-teal-800'
      : 'bg-neutral-900';
  const tagCSS = tagBaseCSS + ' ' + tagColor;

  return <p className={tagCSS}>{type}</p>;
}
