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
                title: 'student',
                icon: GraduationCap,
                url: '/students'
            },
            {
                title: 'create student',
                icon: GraduationCap,
                url: '/students/create'
            }
        ]
    },
    {
        title: 'Setting',
        url: '#',
        icon: Settings
    }
]
