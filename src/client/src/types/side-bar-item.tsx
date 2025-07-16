import type { LucideIcon } from 'lucide-react'

export type sideBarItemType = {
    title: string
    url?: string
    icon: LucideIcon
    subMenu?: Array<sideBarItemType>
}
