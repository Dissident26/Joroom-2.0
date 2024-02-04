import { RootLayout } from "@/components"

const App = ({ Component, pageProps }: any) => {
   return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
   )
}

export default App;