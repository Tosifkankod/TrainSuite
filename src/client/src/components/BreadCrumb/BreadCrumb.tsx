'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'

export default function DynamicBreadcrumb() {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter((segment) => segment) // Split and filter empty segments
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem key="home">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
                    const isLast = index === pathSegments.length - 1
                    const itemKey = `${segment}-${index}` // Unique key for each item
                    return (
                        <div
                            key={itemKey}
                            style={{ display: 'contents' }}
                        >
                            {index >= 0 && <BreadcrumbSeparator />}
                            <BreadcrumbItem key={`${itemKey}-item`}>
                                {isLast ? (
                                    <BreadcrumbPage>{segment.charAt(0).toUpperCase() + segment.slice(1)}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>{segment.charAt(0).toUpperCase() + segment.slice(1)}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
