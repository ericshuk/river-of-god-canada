import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

import { LandingSection, LandingSectionProps } from '@/components/molecules';

const multiLandingSection = tv({
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

export type MultiLandingSectionProps = {
  id?: string;
  sections: LandingSectionProps[];
  topDecoration?: ReactNode;
  bottomDecoration?: ReactNode;
  /**
   * striped: alternating background colors
   *
   * default: transparent background
   */
  type?: typeof multiLandingSection.defaultVariants.type;
};

export default function MultiLandingSection({
  id,
  topDecoration,
  bottomDecoration,
  sections,
  type,
}: MultiLandingSectionProps) {
  const { base } = multiLandingSection({ type });
  return (
    <LandingSection id={id} classNames={{ outer: base() }}>
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
}
