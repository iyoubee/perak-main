import React from 'react'
import { IconProps } from './interface'

export const Wa: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${stroke} ${className}`}
    >
      <path
        d="M11.8739 1.89215C6.5235 1.89215 2.1864 6.22944 2.1864 11.5797C2.1864 12.9688 2.49639 14.3524 3.09508 15.6363C2.3007 19.739 2.21644 20.1168 2.21644 20.1168C2.08663 20.7887 2.66398 21.3641 3.33727 21.2369C3.33727 21.2369 3.70443 21.1734 7.84777 20.3893C9.09843 20.9837 10.4847 21.2672 11.8739 21.2672C17.2243 21.2672 21.5614 16.9299 21.5614 11.5797C21.5614 6.22944 17.2243 1.89215 11.8739 1.89215ZM11.8739 3.82965C16.1538 3.82965 19.6239 7.29942 19.6239 11.5797C19.6239 15.8599 16.1538 19.3297 11.8739 19.3297C10.6562 19.3297 9.48689 19.0437 8.4232 18.5122C8.23333 18.4177 8.02507 18.382 7.81679 18.4215C4.37773 19.0725 4.6509 19.0336 4.36609 19.0875C4.42228 18.7992 4.37383 19.0984 5.03258 15.6968C5.07327 15.4862 5.03743 15.2527 4.94152 15.0612C4.40096 13.99 4.1239 12.8076 4.1239 11.5797C4.1239 7.29942 7.59396 3.82965 11.8739 3.82965ZM9.14977 6.7359C8.24108 6.7359 7.03015 7.94684 7.03015 8.85504C7.03015 10.0255 8.24109 12.1851 9.45203 13.3961C9.58281 13.5264 9.92671 13.8712 10.0575 14.0015C11.2684 15.2125 13.4278 16.4234 14.598 16.4234C15.5067 16.4234 16.7177 15.2125 16.7177 14.3043C16.7177 13.3961 15.5067 12.1851 14.598 12.1851C14.2958 12.1851 13.2001 12.8114 13.0848 12.7906C12.12 12.6164 10.8645 11.3305 10.663 10.3687C10.6349 10.2344 11.2684 9.15778 11.2684 8.85504C11.2684 7.94684 10.0575 6.7359 9.14977 6.7359Z"
        fill="#EBEBF9"
      />
    </svg>
  )
}