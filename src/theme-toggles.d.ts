declare module '@theme-toggles/react' {
  import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react'

  export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    toggled?: boolean
    toggle?: Dispatch<SetStateAction<boolean>>
    duration?: number
    reversed?: boolean
    forceMotion?: boolean
    idPrefix?: string
    onToggle?: (toggled: boolean) => void
  }

  export const Classic: React.FC<ToggleProps>
}
