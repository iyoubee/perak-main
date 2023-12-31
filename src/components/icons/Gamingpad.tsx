import React from 'react'
import { IconProps } from './interface'

export const Gamingpad: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9.67847H8.33333M6.66667 8.0118V11.3451M12.5 10.5118H12.5083M15 8.84513H15.0083M8.70746 4.67847H11.2925C13.4799 4.67847 14.5736 4.67847 15.4321 5.09299C16.188 5.45796 16.816 6.04271 17.2339 6.77063C17.7085 7.59738 17.7864 8.68831 17.9423 10.8702L18.1473 13.7406C18.2478 15.148 17.1331 16.3451 15.7221 16.3451C15.0005 16.3451 14.3162 16.0246 13.8543 15.4703L13.5417 15.0951C13.2557 14.752 13.1127 14.5804 12.9499 14.4418C12.6086 14.1511 12.1954 13.9576 11.7536 13.8814C11.5429 13.8451 11.3196 13.8451 10.8729 13.8451H9.12714C8.68044 13.8451 8.4571 13.8451 8.24636 13.8814C7.80458 13.9576 7.3914 14.1511 7.05009 14.4418C6.88728 14.5804 6.7443 14.752 6.45833 15.0951L6.1457 15.4703C5.68376 16.0246 4.99946 16.3451 4.27788 16.3451C2.86687 16.3451 1.75218 15.148 1.85271 13.7406L2.05774 10.8702C2.21358 8.6883 2.29151 7.59738 2.76614 6.77063C3.18404 6.04271 3.81204 5.45796 4.56788 5.09299C5.42635 4.67847 6.52006 4.67847 8.70746 4.67847Z"
        stroke="#242A2B"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
