import { RootLayout } from "@/components"

const App = ({ Component, pageProps }: any) => {
    const getLayout = Component.getLayout ?? ((page: any) => page)

   return (
    <RootLayout>
        {getLayout(<Component {...pageProps} />)}
    </RootLayout>
   )
}

export default App;