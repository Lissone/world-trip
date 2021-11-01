import { Image, Flex, Heading, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250opx", "250px", "335px"]}
      bgImage="url('/images/starry-sky.png')"
      bgPosition={["100 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex 
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
        justify={['center', 'space-between']}
        align="center"
      >
        <div>
          <Heading color="gray.100" fontWeight="500" fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}>
            5 Continentes, infinitas possibilidades.
          </Heading>

          <Text mt={5} color="gray.300" fontSize={["0.8rem", "xl"]} maxW={["100%", "100%", "100%", "550px"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image 
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          ml="8"
          transform="translateY(48px)"
          src="/icons/airplane.svg"
          alt="Avião"
        />
      </Flex>
    </Flex>
  )
}