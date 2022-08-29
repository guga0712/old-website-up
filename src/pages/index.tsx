import AboutDesk from "../components/AboutUs/AboutDesk";
import AboutUs from "../components/AboutUs/AboutDesk";
import AboutMobi from "../components/AboutUs/AboutMobi";
import AllWeDo from "../components/AllWeDo/AllWeDo";
import BannerDesk from "../components/BannerHome/bannerDesk";
import BannerHome from "../components/BannerHome/bannerDesk";
import BannerMobi from "../components/BannerHome/bannerMObi";
import Diferencial from "../components/Diferencial";
import Footer from "../components/Footer";
import Investimento from "../components/Investimento";
import MainMenu from "../components/MainMenu";
import ServicoDescri from "../components/Servicos/servicoDescri";
import ServicosMobi from "../components/Servicos/ServicosMobi";
import VisaoDesk from "../components/Visao/VisaoDesk";
import VisaoMobi from "../components/Visao/VisaoMobi";
import WeGoHigh from "../components/WeGoHigh";

export default function Home() {
  return (
    <>
      {/* HOME */}
      {/* <BannerDesk />
      <BannerMobi />
      <WeGoHigh />
      <Investimento />
      <AboutDesk />
      <AboutMobi />
      <VisaoDesk />
      <VisaoMobi />
      <Diferencial /> */}

      {/* SERVIÇOS */}
      <ServicosMobi />
      <AllWeDo />
      <ServicoDescri />
    </>
  )
}
