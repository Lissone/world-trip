import { Image, Box, Heading, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box
      bgImage="url('/starry-sky.png')"
      bgRepeat="no-repeat"
      h={370}
      pl="90"
      pr="30"
      pt="20"
      display="flex"
      justifyContent="space-between"
    >
      <Box flexDirection="column" w={450}>
        <Heading color="gray.100">5 Continentes, infinitas possibilidades.</Heading>

        <Text color="gray.200" mt={6}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      </Box>

      <Box>
        <Image src="/airplane.svg" alt="Avião" w={420}/>
      </Box>
    </Box>
  )
}