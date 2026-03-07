import { ReactNode } from "react";
import HomeIcon from "@/app/assets/icons/sidebar_icons/Home";
import ConnectionIcon from "@/app/assets/icons/sidebar_icons/Connections";
import SettingsIcon from "@/app/assets/icons/sidebar_icons/Settings";
import ShieldIcon from "@/app/assets/icons/sidebar_icons/Shield";
import ListIcon from "@/app/assets/icons/sidebar_icons/List";
import AboutIcon from "@/app/assets/icons/sidebar_icons/About";
import NotificationsIcon from "@/app/assets/icons/sidebar_icons/Notification";
import Arrow from "@/app/assets/icons/arrow";
import Back from "@/app/assets/icons/back";
import GoBackIcon from "@/app/assets/icons/sidebar_icons/GoBack";

export interface SidebarItemType {
    id: string;
    label: string;
    icon: ReactNode;
}

export const sidebarItems: SidebarItemType[] = [
    { id: "overview", label: "Overview", icon: <HomeIcon /> }, 
    { id: "users", label: "Users", icon: <ConnectionIcon/> },
    { id: "activity", label: "Activity", icon: <AboutIcon />},
    { id: "global", label: "Announcement", icon: <NotificationsIcon />},
    { id: "admins", label: "Admins", icon: <ShieldIcon /> },
    { id: "seed", label: "Seed", icon: <ListIcon />},
    { id: "settings", label: "Settings", icon: <SettingsIcon />},
    { id: "back", label: "Back", icon: <GoBackIcon />}
];