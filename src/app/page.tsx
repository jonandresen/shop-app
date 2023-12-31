import { ListSection } from "./ListSection";
import { Box, Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <VStack width={"100%"} height={"100%"} >
        <Heading as={"h1"}>Handleliste</Heading>
        <ListSection />
      </VStack>
    </Box>
  );
}
