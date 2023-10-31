import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { FaPrayingHands } from 'react-icons/fa';

import {
  Heading,
  HeroSection,
  LandingDecoration,
  LandingHeroBackgroundVideo,
  LandingSection,
  MultiLandingSection,
  YouTubeEmbedCardList,
} from '@/components';

export default async function Landing() {
  return (
    <>
      <LandingSection
        type='hero'
        background={<LandingHeroBackgroundVideo />}
        heading={<Heading level={1}>Welcome Home</Heading>}
        subHeading='This section will contain welcoming words to the viewers'
      />
      <HeroSection
        heading={<Heading level={1}>River of God Canada Family</Heading>}
        subHeading='Concise summary about River of God When did it start, led by Pastor Ian Samontina and Maurenne Samontina.'
      />
      <MultiLandingSection
        type='striped'
        topDecoration={<LandingDecoration />}
        bottomDecoration={<LandingDecoration flipped />}
        sections={[
          {
            alignment: 'center',
            heading: 'Watch our Latest Service',
            children: (
              <>
                <YouTubeEmbedCardList />
                <Button radius='full' size='lg'>
                  Check out more videos
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

      <MultiLandingSection
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
                <time dateTime='T11:00-05:00'>Every Sunday 11am EST</time>
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
