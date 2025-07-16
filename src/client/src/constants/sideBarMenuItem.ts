import { sideBarItemType } from '@/types/side-bar-item'
import { GraduationCap, LayoutDashboard, Settings } from 'lucide-react'

export const sideBarMenuItem: Array<sideBarItemType> = [
    {
        title: 'Dashboard',
        url: '#',
        icon: LayoutDashboard
    },
    {
        title: 'Students',
        icon: GraduationCap,
        subMenu: [
            {
                title: 'view student',
                icon: GraduationCap,
                url: '#'
            },
            {
                title: 'create student',
                icon: GraduationCap,
                url: '#'
            }
        ]
    },
    {
        title: 'Setting',
        url: '#',
        icon: Settings
    }
]
