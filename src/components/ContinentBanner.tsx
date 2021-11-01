import { Flex, Heading } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      align="center"
      justify={["center", "center", "flex-start"]}
      bgImage="url(/images/banner-eu.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading
        fontSize={["1.75rem", "5xl"]}
        fontWeight="500"
        textAlign={["center", "left"]}
        color="gray.100"
      >
        Europa
      </Heading>
    </Flex>
  )
}