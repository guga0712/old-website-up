import { CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GraphProps {
    percent: number;
    text: ReactNode;
}

export default function Graph({ percent, text }: GraphProps) {
    return (
        <CircularProgress value={percent} size='350px' thickness='7px' color='#00DEB6'>
            <CircularProgressLabel fontSize='15px' color='gray.400'>
                <Text as='span' fontSize='50px' color='#00DEB6' fontWeight='600'>{percent}%</Text>
                {text}
            </CircularProgressLabel>
        </CircularProgress>
    );
}