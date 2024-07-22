import Link from 'next/link'
import { BiGitBranch, BiRefresh, BiXCircle } from 'react-icons/bi'
import { IoWarningOutline, IoLogoGithub } from 'react-icons/io5'
import { AiOutlineClockCircle } from 'react-icons/ai'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/tooltip'
import { weeklyCodingActivity } from '~/lib/actions'

export const Footer = async () => {
  const { data } = await weeklyCodingActivity()
  const todayData = data[data.length - 1]

  return (
    <footer className='border-t text-off-white text-xs flex items-center justify-between select-none bg-layout relative z-30'>
      <div className='flex items-center border-r divide-x'>
        <Link
          target='_blank'
          href='https://github.com/AvaterClasher/www'
          className='flex items-center gap-x-2 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors'
        >
          <BiGitBranch className='text-lg' />
          <p>main</p>
        </Link>
        <button
          aria-label='refetch'
          className='items-center gap-x-2 px-2 py-1 md:flex hidden group hover:text-foreground text-muted-foreground transition-colors'
        >
          <BiRefresh className='text-xl group-active:rotate-180 transition-transform' />
        </button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground'>
                <BiXCircle className='text-base text-red-500' />
                <p>0</p>
                <IoWarningOutline className='text-base text-yellow-300'/>
                <p>0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent className='!border-none'>No problems</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                aria-label={todayData?.grand_total.text}
                href='/coding-activity'
                className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground'
              >
                <AiOutlineClockCircle className='text-base' />
                <p>{todayData?.grand_total.text}</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent className='!border-none'>
              <p>Today coding activity</p>
              <p className='text-sm text-muted-foreground'>click for more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground'>
          <p>--NORMAL--</p>
        </div>
      </div>

      <div className='flex items-center divide-x divide border-l'>
        <Link
          target='_blank'
          href='https://github.com/AvaterClasher'
          className='flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors'
        >
          <p>Soumyadip</p>
          <IoLogoGithub className='text-lg' />
        </Link>
      </div>
    </footer>
  )
}