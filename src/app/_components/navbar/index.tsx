import Link from 'next/link'

import { NavLink } from '../atom/nav-link'

import { NavbarMobileBtn } from './navbar-mobile'
import { ThemeToggle } from '../atom/theme-toggle'

export const Navbar = () => {
  return (
    <nav className='md:grid grid-cols-12 border-b flex items-center justify-between relative z-10 bg-background overflow-x-auto'>
      <Link href='/' className='md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors'>
        Soumyadip
      </Link>
      <div className='md:col-span-9 lg:col-span-10 flex items-center justify-between'>
        <ul className='md:flex items-center divide-x w-max border-r hidden shrink-0'>
          {navMenu.map((menu, i) => (
            <NavLink key={i} href={menu.path}>
              {menu.name}
            </NavLink>
          ))}
        </ul>
        <ThemeToggle />
        <NavbarMobileBtn />
      </div>
    </nav>
  )
}

export const navMenu = [
  {
    name: '_hello',
    path: '/'
  },
  {
    name: '_about-me',
    path: '/about/personal.rs'
  },
  {
    name: '_projects',
    path: '/projects'
  },
  {
    name: '_articles',
    path: 'https://avater.hashnode.dev'
  }
]