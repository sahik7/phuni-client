import { NavLink } from 'react-router-dom';
import { ReactNode } from "react";


interface ISidebarItems {
    key: string,
    label: ReactNode,
    children?: ISidebarItems[]
}

function SidebarItemsGenerators(items: ISidebarItems[]) {
    const adminSidebarItems = items.reduce((acc: ISidebarItems[], item) => {
        if (item.name && item.path) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
            })
        }

        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
                }))
            })
        }
        return acc;
    }, [])
    return adminSidebarItems
}

export default SidebarItemsGenerators