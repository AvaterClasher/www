'use server'
import { revalidatePath } from 'next/cache'

import * as Wakatime from '~/types/wakaResponse'

export const weeklyCodingActivity = async () => {
  const res = await fetch('https://wakatime.com/share/@AvaterClasher/82b7dece-075b-4287-be15-11c9acc26415.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const weeklyCodingLanguanges = async () => {
  const res = await fetch('https://wakatime.com/share/@AvaterClasher/82fccfc2-d666-4473-800d-01923ce987dc.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}

export const weeklyCodeEditor = async () => {
  const res = await fetch('https://wakatime.com/share/@AvaterClasher/fd1556ec-182b-42c1-8601-94e454918480.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}

export const weeklyOperatingSystems = async () => {
  const res = await fetch('https://wakatime.com/share/@AvaterClasher/ff79e5d5-6fb8-4692-ad06-22d5e8b20c00.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}