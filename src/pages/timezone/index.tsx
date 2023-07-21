import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton'
import { MatchCard, Tag, TimezoneCard } from '@elements'
import { api } from 'src/utils/api'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'

const Timezone: NextPage = () => {
  return (
    <main className="relative flex flex-col gap-16 px-16 py-28 font-poppins">
      {/* Text Section */}
      <div className="flex flex-col-reverse items-center justify-between gap-6 text-center md:flex-row  md:text-left">
        <div className="flex justify-center md:w-1/2">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-shadow-lg font-outline-4 font-retro text-display-medium text-purple-darkest shadow-orange-dark md:text-display-large">
              Timezone
            </h1>

            {/* If you need tag*/}
            <p className="font-poppinsBold text-orange-dark">
              Raih posisi tertinggi dan dapatkan hadiah
            </p>
          </div>
        </div>
        <div className="relative flex justify-center md:w-1/2">
          <Image
            src={'/assets/images/League/League.svg'}
            alt="league"
            className={`h-fit w-full max-w-md fill-inherit object-fill`}
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
        <TimezoneCard name="Tetris" slug="tetris" />
        <TimezoneCard name="Snake Nokia" slug="snake" />
      </div>
    </main>
  )
}

export default Timezone
