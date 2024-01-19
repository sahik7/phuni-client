function RoutesGenerator() {
    export const adminRoutes = adminPaths.reduce((acc: IRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            })
        }
        if (item.children) {
            item.children.forEach(child => {
                acc.push({
                    path: child.path,
                    element: child.element
                })
            })
        }
        return acc
    }, [])

    export default RoutesGenerator