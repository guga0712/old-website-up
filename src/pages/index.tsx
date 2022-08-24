import { useBreakpointValue } from "@chakra-ui/react";
import BannerHome from "../components/BannerHome";
import Investimento from "../components/Investimento";
import WeGoHigh from "../components/WeGoHigh";

export default function Home() {

  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   sm: false,
  //   lg: true,


  // })

  return (

    <>
      <BannerHome />
      {/* <WeGoHigh /> */}
      {/* <Investimento /> */}
    </>
  )
}
