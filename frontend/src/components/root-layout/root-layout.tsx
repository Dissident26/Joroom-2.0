import { ReactNode } from "react"

interface ILayoutProps {
    children: ReactNode;
}

export const RootLayout = ({children}: ILayoutProps) => {
    return (<div>
        <main>{children}</main>
    </div>);
   
}