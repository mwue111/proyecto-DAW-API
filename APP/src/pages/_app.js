import 'tailwindcss/tailwind.css'
import 'primereact/resources/themes/saga-green/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import '../assets/tailwind.css'
import '../assets/main.css'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const App = ({ Component, pageProps }) => <GoogleReCaptchaProvider
reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
scriptProps={{
  async: false,
  defer: false,
  appendTo: "head",
  nonce: undefined,
}}
><Component {...pageProps} />
</GoogleReCaptchaProvider>

export default App
