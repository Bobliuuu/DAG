import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (<><Navbar/><Component {...pageProps} /> <Footer/></>);
};

export default MyApp;
