import "@/styles/globals.css"
import type { AppProps } from "next/app"
// import { store } from "../components/app/store"
import { Provider } from "react-redux"
import { store } from "../components/app/store"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
