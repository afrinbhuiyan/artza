import Arts from "./components/Arts";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <Banner />
    <div>
      <Arts />
    </div>
    <Footer />
    </div>
  );
}
