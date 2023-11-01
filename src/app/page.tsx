import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaPrayingHands } from 'react-icons/fa';

import {
  InstagramEmbedCardList,
  LandingDecoration,
  LandingHeroBackgroundVideo,
  LandingSection,
  MultiLandingSection,
  YouTubeEmbedCardList,
} from '@/components';
import GoogleMapsEmbeded from '@/components/molecules/embeds/googleMapsEmbed';

export default async function Landing() {
  return (
    <>
      <LandingSection
        type='hero'
        background={<LandingHeroBackgroundVideo />}
        animation='fade-elevate'
        heading='Welcome Home'
        subHeading='This section will contain welcoming words to the viewers'
      />
      <LandingSection
        type='hero'
        animation='fade'
        heading='River of God Canada Family'
        subHeading='Concise summary about River of God When did it start, led by Pastor Ian Samontina and Maurenne Samontina.'
      >
        <InstagramEmbedCardList />
      </LandingSection>
      <MultiLandingSection
        type='striped'
        topDecoration={<LandingDecoration />}
        bottomDecoration={<LandingDecoration flipped />}
        sections={[
          {
            alignment: 'center',
            animation: 'fade',
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
            animation: 'fade',
            heading: 'Prayer of the Day',
            direction: 'row',
            subHeading:
              'This section will contain simple prayers for the reader',
            children: (
              <div className='flex flex-col gap-4'>
                <Image
                  src='/images/landing/prayer-of-the-day.jpg'
                  alt='Prayer of the Day'
                  width='300'
                  height='300'
                  className='overflow-hidden rounded-xl'
                />
                <Button radius='full' size='lg'>
                  <FaPrayingHands />
                  Bless yourself
                </Button>
              </div>
            ),
          },
        ]}
      />

      <MultiLandingSection
        type='striped'
        sections={[
          {
            alignment: 'left',
            animation: 'fade',
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
              <GoogleMapsEmbeded src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.7282209419855!2d-80.47483306991366!3d43.4251331063455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf5238f7981f7%3A0xfdcdb8f71d4b1fdd!2s65%20Hanson%20Ave%2C%20Kitchener%2C%20ON%20N1C%204DR!5e0!3m2!1sen!2sca!4v1698623980280!5m2!1sen!2sca' />
            ),
          },
        ]}
      />

      <LandingSection
        type='striped'
        animation='fade'
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
