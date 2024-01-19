import { ReactNode } from "react";

export interface IUserPaths {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: IUserPaths[]
}


export interface IRoute {
    path: string,
    element: ReactNode
}

export interface ISidebarItems {
    key: string,
    label: ReactNode,
    children?: ISidebarItems[]
}