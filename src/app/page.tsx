import Image from "next/image";
import { ListSection } from "./ListSection";
import { Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <VStack width={'100%'} height={'100%'} >
        <Heading as={"h1"}>Handleliste</Heading>
        <ListSection />
      </VStack>
    </main>
  );
}
