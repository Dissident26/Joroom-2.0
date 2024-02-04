import { ReactNode } from "react"
import { Header } from "./header";
import { Footer } from "./footer";

interface ILayoutProps {
    children: ReactNode;
}

export const RootLayout = ({ children }: ILayoutProps) => {
    return (<div>
        <header>
            <Header />
        </header>
        <main>{children}</main>
            <footer>
                <Footer />
            </footer>
    </div>);
   
}