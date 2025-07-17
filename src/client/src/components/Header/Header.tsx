import { Separator } from '@radix-ui/react-separator'
import { SidebarTrigger } from '../ui/sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'

export default function Header() {
    return (
        <header className="bg-background flex h-16 items-center p-4 gap-3 sm:gap-4 shadow-none">
            <SidebarTrigger
                variant="outline"
                className="scale-90 sm:scale-80 "
            />
            <Separator
                orientation="vertical"
                className="h-6 w-px bg-border"
            />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}
