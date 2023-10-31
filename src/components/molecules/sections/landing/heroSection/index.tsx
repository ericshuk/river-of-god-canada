import { LandingSection, LandingSectionProps } from '@/components/molecules';

type HeroSectionProps = {
  backgroundSrc?: string;
} & Omit<LandingSectionProps, 'children'>;

export default function HeroSection({
  classNames,
  backgroundSrc = '',
  heading = '',
  subHeading = '',
}: HeroSectionProps) {
  return (
    <LandingSection
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
