'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Fragment, createContext, useContext, useState } from 'react'

import { AnimatePresence, FadeIn } from '../atom/fade-in'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/accordion'

interface NavbarMobileContextProps {
  isOpen: boolean
  toggleNavbar: () => void
}

const NavbarContext = createContext<NavbarMobileContextProps | undefined>(undefined)

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  return <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>{children}</NavbarContext.Provider>
}

export const useNavbarMobile = (): NavbarMobileContextProps => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error('useNavbarMobile must be used within a NavbarMobileProvider')
  }
  return context
}

export const NavbarMobileBtn: React.FC = () => {
  const { toggleNavbar } = useNavbarMobile()

  return (
    <button className='text-muted-foreground ml-auto px-2.5 block md:hidden' onClick={toggleNavbar}>
      <Menu />
    </button>
  )
}

export const NavbarMobile = () => {
  const { isOpen, toggleNavbar } = useNavbarMobile()

  return (
    <AnimatePresence>
      {isOpen && (
        <FadeIn fromTopToBottom className='absolute top-[57px] left-0 bg-background h-[calc(100%-57px-27px)] w-full z-50 p-5 divide-y overflow-y-auto'>
          {navMenu.map((menu, i) => (
            <Fragment key={i}>
              {menu.child ? (
                <Accordion type='single' collapsible>
                  <AccordionItem value={menu.name}>
                    <AccordionTrigger className='text-2xl font-normal text-foreground'>{menu.name}</AccordionTrigger>
                    <AccordionContent className='pl-5 divide-y'>
                      {menu.child.map((child, j) => (
                        <Link href={child.path} key={j} className='block text-xl py-2 first:pt-0 last:pb-0 border-b last:border-0 text-muted-foreground' onClick={toggleNavbar}>
                          {child.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link href={menu.path} className='block text-2xl py-4 first:pt-0 last:pb-0' onClick={toggleNavbar}>
                  {menu.name}
                </Link>
              )}
            </Fragment>
          ))}
        </FadeIn>
      )}
    </AnimatePresence>
  )
}

export const navMenu = [
  {
    name: '_hello',
    path: '/'
  },
  {
    name: '_about-me',
    child: [
      {
        name: 'personal.rs',
        path: '/about/personal.rs'
      },
      {
        name: 'links.ts',
        path: '/about/links.ts'
      },
    ]
  },
  {
    name: '_projects',
    child: [
      {
        name: 'All Projects',
        path: '/projects'
      },
      {
        name: 'React',
        path: '/projects?tag=react'
      },
      {
        name: 'Next',
        path: '/projects?tag=next'
      },
      {
        name: 'HTML',
        path: '/projects?tag=html'
      }
    ]
  },
  {
    name: '_articles',
    path: '/articles'
  },
  {
    name: '_coding-activity',
    child: [
      {
        name: 'Languages',
        path: '/coding-activity'
      },
      {
        name: 'Activity',
        path: '/coding-activity/activity'
      },
      {
        name: 'Code Editor',
        path: '/coding-activity/code-editor'
      },
      {
        name: 'Operating Systems',
        path: '/coding-activity/operating-systems'
      }
    ]
  },
  {
    name: '_contact',
    child: [
      {
        name: 'Email',
        path: 'mailto:avater.clasher@gmail.com'
      },
      {
        name: 'WhatsApp',
        path: 'https://wa.me/+916297653534'
      },
      {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/soumyadip-moni/'
      },
      {
        name: 'Instagram',
        path: 'https://www.instagram.com/soumyadip-moni/'
      }
    ]
  }
]