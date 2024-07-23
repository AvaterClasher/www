import { Suspense } from 'react'
import { RiReactjsLine, RiHtml5Fill } from 'react-icons/ri'
import { FaRust } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { TbBrandNextjs, TbBrandThreejs, TbBrandVite } from 'react-icons/tb'
import { HiTerminal } from 'react-icons/hi'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/accordion'
import { AsideLink } from '~/app/_components/atom/aside-link'
import { FadeInStagger, FadeIn } from '~/app/_components/atom/fade-in'
import { ENV } from '~/lib/constants'
import { generateSEO } from '~/lib/generateSeo'
import { SiPytorch, SiTensorflow } from 'react-icons/si'

const title = 'projects'
const description = 'All my projects, including React, React Native, Three.js, Next, and HTML.'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/projects`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='item-0'>
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} startWith='/projects' title={listItem.title}>
                          {listItem.icon}
                          {listItem.title}
                        </AsideLink>
                      </Suspense>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
  )
}

const data = [
  {
    title: 'Projects',
    list: [
      {
        title: 'All Projects',
        href: '/projects',
        icon: <HiTerminal className='w-4 h-4' />
      },
      {
        title: 'React',
        href: '/projects?tag=React',
        icon: <RiReactjsLine className='w-4 h-4' />
      },
      {
        title: 'React Native',
        href: '/projects?tag=React Native',
        icon: <RiReactjsLine className='w-4 h-4' />
      },
      {
        title: 'Rust',
        href: '/projects?tag=Rust',
        icon: <FaRust className='w-4 h-4' />
      },
      {
        title: 'Go',
        href: '/projects?tag=Go',
        icon: <FaGolang className='w-4 h-4' />
      },
      {
        title: 'Pytorch',
        href: '/projects?tag=Pytorch',
        icon: <SiPytorch className='w-4 h-4' />
      },
      {
        title: 'Tensorflow',
        href: '/projects?tag=Tensorflow',
        icon: <SiTensorflow className='w-4 h-4' />
      },
      {
        title: 'Next.js',
        href: '/projects?tag=Next.js',
        icon: <TbBrandNextjs className='w-4 h-4' />
      },
      {
        title: 'Three.js',
        href: '/projects?tag=Threejs',
        icon: <TbBrandThreejs className='w-4 h-4' />
      },
      {
        title: 'VITE',
        href: '/projects?tag=Vite',
        icon: <TbBrandVite className='w-4 h-4' />
      }
    ]
  }
]