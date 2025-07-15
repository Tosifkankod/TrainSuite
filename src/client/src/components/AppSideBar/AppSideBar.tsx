 
 
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar'
import { sideBarMenuItem } from '@/constants/sideBarMenuItem'
import { sideBarItem } from '@/types/side-bar-item'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarMenu>
                        {sideBarMenuItem.map((item: sideBarItem, index: number) => {
                            return (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
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
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{'Mr. Saad Fking Mahimkar'}</span>
                                        <span className="truncate text-xs">{'worst dev in the world'}</span>
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
