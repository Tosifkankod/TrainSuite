import { sideBarItem } from '@/types/side-bar-item'
import { GraduationCap, LayoutDashboard, Settings } from 'lucide-react'

export const sideBarMenuItem: sideBarItem[] = [
    {
        title: 'Dashboard',
        url: '#',
        icon: LayoutDashboard
    },
    {
        title: 'Students',
        url: '#',
        icon: GraduationCap
    },
    {
        title: 'Setting',
        url: '#',
        icon: Settings
    }
]
