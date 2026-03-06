import { ReactNode } from "react";
import HomeIcon from "@/app/assets/icons/sidebar_icons/Home";
import ConnectionIcon from "@/app/assets/icons/sidebar_icons/Connections";
import SettingsIcon from "@/app/assets/icons/sidebar_icons/Settings";
import ShieldIcon from "@/app/assets/icons/sidebar_icons/Shield";

export interface SidebarItemType {
    id: string;
    label: string;
    icon: ReactNode;
}

export const sidebarItems: SidebarItemType[] = [
    { id: "overview", label: "Overview", icon: <HomeIcon /> }, 
    { id: "users", label: "Users", icon: <ConnectionIcon/> },
    { id: "admins", label: "Admins", icon: <ShieldIcon /> },
    { id: "settings", label: "Settings", icon: <SettingsIcon />}
];