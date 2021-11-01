import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react'

export function City() {
  return (
    <Box
      borderRadius="4px"
      overflow="hidden"
    >
      <Image 
        h="170px" 
        w="100%" 
        src="/images/london-city.png" 
        alt="Imagem de uma ponte de Londres" 
      />

      <Flex
        p="6"
        align="center"
        justify="space-between"
        border="1px"
        borderTop="0"
        borderColor="yellow.300"
        bg="white"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>

          <Text
            mt="3"
            fontSize="md"
            fontWeight="500"
            color="gray.500"
          >
            Reino Unido
          </Text>
        </Flex>

        <Image 
          h="30px" 
          w="30px" 
          borderRadius="50%"
          objectFit="cover"
          src="/images/flag-reino-unido.png" 
          alt="Bandeira do Reino Unido" 
        />
      </Flex>
    </Box>
  )
}