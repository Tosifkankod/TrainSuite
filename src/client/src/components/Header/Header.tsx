import { Separator } from '@radix-ui/react-separator'
import { SidebarTrigger } from '../ui/sidebar'

export default function Header() {
    return (
        <header className="bg-background flex h-16 items-center gap-3 p-4 sm:gap-4 shadow-none">
            <SidebarTrigger
                variant="outline"
                className="scale-125 sm:scale-100"
            />
            <Separator
                orientation="vertical"
                className="h-6"
            />
        </header>
    )
}
