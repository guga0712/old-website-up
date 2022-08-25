import { Center, Flex } from "@chakra-ui/react";
import Graph from "./Graph";

export default function GraphsHome() {
    return (
        <>
            <Graph percent={78} text={[<br />, 'dos clientes já estão', <br />, 'lucrando muito mais do', <br />, 'que investiram']} />
            <Graph percent={90} text={[<br />, 'das lojas estão', <br />, 'investindo o dobro do', <br />, 'que quando iniciaram', <br />, 'com a gente.']} />
        </>
    );

}