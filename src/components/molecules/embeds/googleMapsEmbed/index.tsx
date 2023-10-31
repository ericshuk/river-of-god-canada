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
      className='aspect-square w-full rounded-xl border-0 dark:invert'
      loading='lazy'
    />
  );
}
