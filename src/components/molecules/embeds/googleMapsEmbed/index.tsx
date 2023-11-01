export type GoogleMapsEmbededProps = { src: string };

/**
 *  Embeded Google Maps iframe
 *
 * @param {GoogleMapsEmbededProps} props
 */
export default function GoogleMapsEmbeded({ src }: GoogleMapsEmbededProps) {
  return (
    <iframe
      src={src}
      className='aspect-square max-w-xl rounded-xl border-0 ring ring-primary dark:invert'
      loading='lazy'
    />
  );
}
