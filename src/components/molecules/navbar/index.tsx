'use client';

import {
  Link,
  Navbar as BaseNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { ThemeSwitchToggle } from '@/components/molecules/switches';

import BrandLogo from '@/assets/brand.png';
import { SITE_CONFIG } from '@/constants';

const items = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'about',
    label: 'About',
  },
  {
    id: 'service',
    label: 'Service',
  },
  {
    id: 'connect',
    label: 'Connect',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  return (
    <BaseNavbar
      className='sticky'
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            as={NextLink}
            href='/'
            className='gap-2 font-bold uppercase text-inherit'
          >
            <div className='relative size-12'>
              <Image src={BrandLogo.src} alt='Brand Logo' layout='fill' />
            </div>
            {SITE_CONFIG.name}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-8 sm:flex' justify='end'>
        {items.map((item) => (
          <NavbarItem key={item.id} isActive={activeItem === item.id}>
            <Link color='foreground' href={'#' + item.id}>
              <ScrollLink
                activeClass='text-primary-100 transition-colors duration-500 ease-in-out'
                onSetActive={setActiveItem}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                delay={0}
                duration={500}
                href={'#' + item.id}
              >
                {item.label}
              </ScrollLink>
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitchToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />

      <NavbarMenu>
        <NavbarMenuItem>
          {items.map((item) => (
            <Link
              key={item.id}
              className='w-full'
              color='foreground'
              href='#'
              size='lg'
            >
              <ScrollLink
                onSetActive={setActiveItem}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.label}
              </ScrollLink>
            </Link>
          ))}
        </NavbarMenuItem>
      </NavbarMenu>
    </BaseNavbar>
  );
}
