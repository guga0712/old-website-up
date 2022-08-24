import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface LinkFooterProps {
    href: string;
    page: string;
}

export default function LinkFooter({ href, page }: LinkFooterProps) {
    return (
        <Link href={href}>
            <ChakraLink textDecoration='none' _hover={{ textDecoration: 'none' }}>{page}</ChakraLink>
        </Link>
    );
}