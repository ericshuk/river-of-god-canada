import { Block, type BlockProps } from '@/components/molecules';

import { StrictOmit } from '@/types';

type HeroBlockProps = {
  backgroundSrc?: string;
} & StrictOmit<BlockProps, 'children'>;

/** The big block section that is featured at the top of landing page.  */
export default function HeroBlock({
  classNames,
  backgroundSrc = '',
  heading = '',
  subHeading = '',
}: HeroBlockProps) {
  return (
    <Block
      background={
        backgroundSrc ? (
          <video
            src={backgroundSrc}
            className='h-full w-full object-cover'
            loop
            autoPlay
            muted
          />
        ) : undefined
      }
      classNames={classNames}
      heading={heading}
      subHeading={subHeading}
      type='hero'
    />
  );
}
