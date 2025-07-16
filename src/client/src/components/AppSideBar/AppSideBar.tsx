/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { sideBarMenuItem } from '@/constants/sideBarMenuItem'
import { sideBarItemType } from '@/types/side-bar-item'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronRight } from 'lucide-react'

export default function AppSidebar() {
    return (
        <Sidebar
            variant="floating"
            collapsible="icon"
        >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg font-semibold">Application</SidebarGroupLabel>
                    <SidebarMenu>
                        {sideBarMenuItem.map((item: sideBarItemType, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                            />
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground text-base"
                                    aria-label="User profile"
                                >
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{'saad mahimkar'}</span>
                                        <span className="truncate text-xs text-muted-foreground">{'worst developer in the world'}</span>
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

const MenuItem = ({ item }: { item: sideBarItemType }) => {
    return item.subMenu ? (
        <Collapsible
            defaultOpen
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        tooltip={item.title}
                        aria-label={`Toggle ${item.title} menu`}
                        className="text-base font-medium" // Main menu: normal font size
                    >
                        <item.icon className="mr-2 w-5 h-5" />
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent
                    className={
                        'text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
                    }
                >
                    <SidebarMenuSub>
                        {item.subMenu.map((subItem: sideBarItemType, subIndex: number) => (
                            <SidebarMenuSubItem key={subIndex}>
                                <a
                                    href={subItem.url || '#'}
                                    className="flex items-center text-sm pl-8 text-muted-foreground hover:text-foreground" // Submenu: smaller font, indented
                                >
                                    <span>{subItem.title}</span>
                                </a>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    ) : (
        <SidebarMenuItem>
            <SidebarMenuButton
                asChild
                tooltip={item.title}
                className="text-base font-medium" // Main menu: normal font size
            >
                <a
                    href={item.url || '#'}
                    aria-label={item.title}
                >
                    <item.icon className="mr-2 w-5 h-5" />
                    <span>{item.title}</span>
                </a>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}
