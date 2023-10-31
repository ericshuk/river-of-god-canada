import { twMerge } from 'tailwind-merge';

export default function LandingDecoration({
  flipped = false,
}: {
  flipped?: boolean;
}) {
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
}
