import React, { useState } from 'react'

import { Button, Tag } from '@elements'
import Image from 'next/image'
import Link from 'next/link'
import { TimezoneCardProps } from './interface'

export const TimezoneCard: React.FC<TimezoneCardProps> = ({
  name,
  slug,
  className,
}) => {
  const [isHover, setIsHover] = useState(false)
  const renderURL = (name: string) => {
    switch (name) {
      case 'Snake Nokia':
        return '/assets/images/gameCard/snake_game.jpg'
      case 'Tetris':
        return '/assets/images/gameCard/Tetris.jpg'
      default:
        return ''
    }
  }
  return (
    <div
      className={`rounded-[20px] bg-blue-dark p-[10px] ${className ?? ''} w-80`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative min-h-[260px] overflow-hidden rounded-[12px] bg-black">
        <div className="overflow-hidden">
          <Image
            src={renderURL(name) as string}
            alt="Game"
            className={`-mt-1 rounded-[0px] bg-center object-cover transition-all duration-200 ease-in-out ${
              isHover ? 'scale-125 opacity-75' : 'scale-100'
            }`}
            fill
            priority
            placeholder="blur"
            blurDataURL="/assets/images/ImagePlaceholder.svg"
          />
        </div>
        <div
          className={`absolute w-full bg-blue-normal px-4 pb-4 pt-2 transition-all duration-200 ease-in-out ${
            isHover ? 'bottom-0' : '-bottom-[26%]'
          } ${className ?? ''}`}
        >
          <p className="font-poppinsBold text-title-large font-extrabold text-background-light">
            {name}
          </p>
          <div className="mt-1 flex flex-col gap-2">
            <Link href={`/timezone/${slug}`} className="w-full">
              <Button variant={1} className="w-full py-4">
                Mainkan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
