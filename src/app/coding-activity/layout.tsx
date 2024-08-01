import { Suspense } from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/accordion'
import { AsideLink } from '~/app/_components/atom/aside-link'
import { FadeIn, FadeInStagger } from '~/app/_components/atom/fade-in'
import { ENV } from '~/lib/constants'
import { generateSEO } from '~/lib/generateSeo'

import { allActivity } from './allActivities'

const title = 'coding-activity'
const description = 'coding-activity'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/coding-activity`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default function CodingActivityLayout({ children }: { children: React.ReactNode }) {
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
                        <AsideLink href={`/coding-activity/${listItem.slug}`} startWith='/coding-activity' title={listItem.slug}>
                          <listItem.icon />
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
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84vh] md:h-auto p-5'>{children}</section>
    </section>
  )
}

const data = [
  {
    title: 'Coding Activity',
    list: [...allActivity]
  }
]