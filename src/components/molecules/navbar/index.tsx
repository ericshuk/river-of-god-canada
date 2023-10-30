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
} from '@nextui-org/react';
import { useState } from 'react';

import { ThemeSwitchToggle } from '@/components/molecules/switches';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BaseNavbar className='sticky' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className='font-bold uppercase text-inherit'>
            River of God Canada
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-8 sm:flex' justify='end'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Give
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Connect
          </Link>
        </NavbarItem>
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
          <Link className='w-full' color='foreground' href='#' size='lg'>
            Home
          </Link>
          <Link className='w-full' color='foreground' href='#' size='lg'>
            Service
          </Link>
          <Link className='w-full' color='foreground' href='#' size='lg'>
            About
          </Link>
          <Link className='w-full' color='foreground' href='#' size='lg'>
            Give
          </Link>
          <Link className='w-full' color='foreground' href='#' size='lg'>
            Connect
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </BaseNavbar>
  );
}
