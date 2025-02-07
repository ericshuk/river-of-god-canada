import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

import { Block, BlockProps } from '@/components/molecules';

const multiBlock = tv({
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

export type MultiBlockProps = {
  id?: string;
  sections: BlockProps[];
  topDecoration?: ReactNode;
  bottomDecoration?: ReactNode;
  /**
   * striped: alternating background colors
   *
   * default: transparent background
   */
  type?: typeof multiBlock.defaultVariants.type;
};

export default function MultiBlock({
  id,
  topDecoration,
  bottomDecoration,
  sections,
  type,
}: MultiBlockProps) {
  const { base } = multiBlock({ type });
  return (
    <Block id={id} classNames={{ outer: base() }}>
      {topDecoration}
      {sections.map((section, index) => (
        <Block
          {...section}
          type={type === 'striped' ? 'default' : type}
          key={index}
        />
      ))}
      {bottomDecoration}
    </Block>
  );
}
