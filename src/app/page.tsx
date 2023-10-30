import { Button, Input } from '@nextui-org/react';
import React, { PropsWithChildren, ReactNode } from 'react';
import { FaPrayingHands } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const YouTube = ({ embedId }: { embedId: string }) => {
  return (
    <iframe
      className='aspect-video h-48 rounded-xl bg-gray-500'
      src={`https://www.youtube.com/embed/${embedId}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  );
};

const Decoration = ({ flipped = false }: { flipped?: boolean }) => {
  return (
    <div
      className={twMerge(
        'mx-4 flex h-6 w-[calc(100%-5rem)] flex-col gap-3 overflow-hidden',
        flipped ? 'flex-col-reverse self-end' : ''
      )}
    >
      <div className='w-[calc(100%-2.5rem)] flex-1 rounded-full bg-[#615013]'></div>
      <div className='ml-10 w-[calc(100%-2.5rem)] flex-1 rounded-full bg-[#615013]'></div>
    </div>
  );
};

const landingSection = tv({
  slots: {
    base: 'relative z-10 flex w-full flex-col items-center overflow-hidden first:bg-transparent',
    background: 'absolute -z-10 h-full w-full',
    inner:
      'flex flex-col h-full max-w-screen-xl flex-col items-start gap-8 p-8',
    header: 'flex flex-col w-full gap-4',
    heading: 'text-3xl drop-shadow-xl',
    subHeading: 'text-lg drop-shadow-xl',
  },
  variants: {
    alignment: {
      center: { base: 'items-center' },
      left: { base: 'items-start' },
      right: { base: 'items-end' },
      alternating: { base: 'even:items-end odd:items-start' },
    },
    direction: {
      column: { inner: 'flex-col' },
      row: { inner: 'md:flex-row' },
    },
    type: {
      default: { base: 'bg-transparent' },
      striped: { base: 'odd:bg-background-900 even:bg-background-800' },
      hero: {
        base: 'h-[calc(100vh-4rem)] bg-background-800',
        inner: 'items-center justify-center',
        heading: 'text-8xl uppercase text-center',
        subHeading: 'text-xl text-center',
      },
    },
  },
  defaultVariants: {
    direction: 'column',
    type: 'default',
  },
});

type LandingSectionProps = {
  background?: ReactNode;
  bottomDecoration?: ReactNode;
  classNames?: {
    background?: string;
    outer?: string;
    inner?: string;
    header?: string;
    heading?: string;
    subHeading?: string;
  };
  children?: ReactNode;
  topDecoration?: ReactNode;
  heading?: string;
  subHeading?: ReactNode;
  alignment?: typeof landingSection.defaultVariants.alignment;
  direction?: typeof landingSection.defaultVariants.direction;
  type?: typeof landingSection.defaultVariants.type;
} & PropsWithChildren;

const LandingSection = ({
  background,
  children,
  classNames,
  heading,
  subHeading,
  alignment = 'center',
  direction = 'column',
  type = 'default',
}: LandingSectionProps) => {
  const {
    base,
    inner,
    background: backgroundVariant,
    header: headerVariant,
    heading: headingVariant,
    subHeading: subHeadingVariant,
  } = landingSection({ alignment, direction, type });

  const BaseTag =
    type === 'hero'
      ? 'header'
      : ('section' satisfies keyof JSX.IntrinsicElements);
  const HeaderTag = (
    type === 'hero' ? 'h1' : 'h2'
  ) satisfies keyof JSX.IntrinsicElements;
  const SubHeaderTag = (
    type === 'hero' ? 'h2' : 'h3'
  ) satisfies keyof JSX.IntrinsicElements;

  return (
    <BaseTag className={twMerge(base(), classNames?.outer)}>
      {background && (
        <div className={twMerge(backgroundVariant(), classNames?.background)}>
          {background}
        </div>
      )}
      <div className={twMerge(inner(), classNames?.inner)}>
        <div className={twMerge(headerVariant(), classNames?.header)}>
          {heading && (
            <HeaderTag
              className={twMerge(headingVariant(), classNames?.heading)}
            >
              {heading}
            </HeaderTag>
          )}
          {subHeading && (
            <SubHeaderTag
              className={twMerge(subHeadingVariant(), classNames?.subHeading)}
            >
              {subHeading}
            </SubHeaderTag>
          )}
        </div>
        {children}
      </div>
    </BaseTag>
  );
};

type HeroSectionProps = {
  backgroundSrc?: string;
} & Omit<LandingSectionProps, 'children' | 'background'>;

const HeroSection = ({
  classNames,
  backgroundSrc = '',
  heading = '',
  subHeading = '',
}: HeroSectionProps) => {
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
};

const sectionGroup = tv({
  slots: { base: 'flex w-full flex-col' },
  variants: {
    type: {
      default: { base: 'bg-transparent' },
      striped: { base: 'even:bg-background-800' },
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

type SectionGroupProps = {
  sections: LandingSectionProps[];
  topDecoration?: ReactNode;
  bottomDecoration?: ReactNode;
  type?: typeof sectionGroup.defaultVariants.type;
};

const SectionGroup = ({
  topDecoration,
  bottomDecoration,
  sections,
  type,
}: SectionGroupProps) => {
  const { base } = sectionGroup({ type });
  return (
    <LandingSection classNames={{ outer: base() }}>
      {topDecoration}
      {sections.map((section, index) => (
        <LandingSection
          {...section}
          type={type === 'striped' ? 'default' : type}
          key={index}
        />
      ))}
      {bottomDecoration}
    </LandingSection>
  );
};

export default async function Home() {
  return (
    <>
      <HeroSection
        backgroundSrc='/videos/hero.mp4'
        heading='Welcome Home'
        subHeading='This section will contain welcoming words to the viewers'
      />
      <HeroSection
        heading='River of God Canada'
        subHeading='This section will contain welcoming words to the viewers'
      />
      <SectionGroup
        type='striped'
        topDecoration={<Decoration />}
        bottomDecoration={<Decoration flipped />}
        sections={[
          {
            alignment: 'alternating',
            heading: 'Watch our Latest Service',
            children: (
              <>
                <div className='flex flex-wrap gap-10'>
                  <YouTube embedId='bBJj3zCAfBw?si=y-c1rupdElfAN2f2' />
                  <YouTube embedId='zofBinqC2F4?si=fsJ_7FB6ik2aNDM4' />
                  <YouTube embedId='6tYrzUmLnu8?si=UdWEO9KY29aAjk7a' />
                  <YouTube embedId='bBJj3zCAfBw?si=y-c1rupdElfAN2f2' />
                  <YouTube embedId='zofBinqC2F4?si=fsJ_7FB6ik2aNDM4' />
                  <YouTube embedId='6tYrzUmLnu8?si=UdWEO9KY29aAjk7a' />
                </div>
                <Button radius='full' size='lg'>
                  Watch more
                </Button>
              </>
            ),
          },
          {
            alignment: 'alternating',
            heading: 'Prayer of the Day',
            subHeading:
              'This section will contain simple prayers for the reader',
            children: (
              <Button radius='full' size='lg'>
                <FaPrayingHands />
                Bless yourself
              </Button>
            ),
          },
        ]}
      />

      <SectionGroup
        type='striped'
        sections={[
          {
            alignment: 'left',
            heading: 'Check out our Upcoming Events',
            children: (
              <Button radius='full' size='lg'>
                See More
              </Button>
            ),
          },
          {
            heading: 'Come, Join us at our weekly service with the Lord',
            subHeading: (
              <>
                Every Sunday - 11:00{' '}
                <address>
                  65 Hanson Avenue, Kitchener, ON, Canada, N2C 2H6
                </address>
              </>
            ),
            direction: 'row',
            children: (
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.7282209419855!2d-80.47483306991366!3d43.4251331063455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf5238f7981f7%3A0xfdcdb8f71d4b1fdd!2s65%20Hanson%20Ave%2C%20Kitchener%2C%20ON%20N1C%204DR!5e0!3m2!1sen!2sca!4v1698623980280!5m2!1sen!2sca'
                className='aspect-square w-full rounded-xl border-0 dark:invert'
                loading='lazy'
              />
            ),
          },
        ]}
      />

      <LandingSection
        type='striped'
        heading="Our family is only one click away! We'll be happy to meet you"
        direction='row'
      >
        <form className='grid w-full grid-cols-2 gap-4'>
          <Input placeholder='First name' />
          <Input placeholder='Last name' />
          <Input className='col-span-2' type='email' placeholder='Email' />
          <Button type='submit' radius='full' size='lg'>
            Submit
          </Button>
        </form>
      </LandingSection>

      {/* Footer */}
      <footer className='py-16'>
        <div className='flex flex-col items-center justify-center gap-4 p-4'>
          <h1 className='text-sm'>© River of God Canada</h1>
          <h2 className='text-sm'>
            <address>65 Hanson Avenue, Kitchener, ON, Canada, N2C 2H6</address>
          </h2>
        </div>
      </footer>
    </>
  );
}
