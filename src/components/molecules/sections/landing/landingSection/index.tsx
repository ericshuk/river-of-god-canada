import { JSX, PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { Heading } from '@/components/atoms';

const landingSection = tv({
  slots: {
    base: 'relative flex z-10 w-full flex-col items-center overflow-hidden first:bg-transparent',
    background: 'absolute -z-10 h-full w-full',
    inner:
      'flex flex-col h-full max-w-screen-xl flex-col items-start gap-8 p-8',
    header: 'flex flex-col w-full gap-4',
    heading: 'text-3xl drop-shadow-xl normal-case',
    subHeading: 'text-lg drop-shadow-xl normal-case',
  },
  variants: {
    alignment: {
      center: { base: '[&>*]:items-center' },
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
        inner: 'items-center justify-center gap-20',
        header: 'flex flex-col w-full gap-8',
        heading: 'text-6xl md:text-7xl lg:text-8xl text-center uppercase',
        subHeading: 'text-lg md:text-xl text-center max-w-2xl m-auto',
      },
    },
  },
  defaultVariants: {
    direction: 'column',
    type: 'default',
  },
});

export type LandingSectionProps = {
  background?: ReactNode;
  bottomDecoration?: ReactNode;
  id?: string;
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
  heading?: ReactNode;
  subHeading?: ReactNode;
  alignment?: typeof landingSection.defaultVariants.alignment;
  direction?: typeof landingSection.defaultVariants.direction;
  animation?: 'fade' | 'fade-elevate';
  /**
   * striped: alternating background colors
   *
   * default: transparent background
   */
  type?: typeof landingSection.defaultVariants.type;
} & PropsWithChildren;

/**
 * Landing section component used to create sections on the landing page.
 *
 * @param {LandingSectionProps} props
 */
export default function LandingSection({
  animation,
  background,
  children,
  classNames,
  heading,
  id,
  subHeading,
  alignment = 'center',
  direction = 'column',
  type = 'default',
}: LandingSectionProps) {
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

  return (
    <BaseTag id={id} className={twMerge(base(), classNames?.outer)}>
      {background && (
        <div className={twMerge(backgroundVariant(), classNames?.background)}>
          {background}
        </div>
      )}
      <div className={twMerge(inner(), classNames?.inner)}>
        <div className={twMerge(headerVariant(), classNames?.header)}>
          {heading && (
            <Heading
              animation={animation}
              level={type === 'hero' ? 1 : 2}
              className={twMerge(headingVariant(), classNames?.heading)}
            >
              {heading}
            </Heading>
          )}
          {subHeading && (
            <Heading
              animation={animation}
              level={type === 'hero' ? 2 : 3}
              className={twMerge(subHeadingVariant(), classNames?.subHeading)}
            >
              {subHeading}
            </Heading>
          )}
        </div>
        {children}
      </div>
    </BaseTag>
  );
}
