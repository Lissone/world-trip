import { Flex, Heading } from '@chakra-ui/react'

import { Continent } from '../pages/continent/[slug]'

interface ContinentBannerProps {
  continent: Continent
}

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      align="center"
      justify={["center", "center", "flex-start"]}
      bgImage={continent.bannerImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
      >
        <Heading
          fontSize={["1.75rem", "5xl"]}
          fontWeight="500"
          textAlign={["center", "left"]}
          color="gray.100"
        >
          {continent.title}
        </Heading>
      </Flex>
    </Flex>
  )
}