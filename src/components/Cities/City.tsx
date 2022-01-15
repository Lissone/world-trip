import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react'

interface CityProps {
  name: string
  country: string
  flag: string
  image: string
}

export function City({ name, country, flag, image }: CityProps) {
  return (
    <Box
      borderRadius="4px"
      overflow="hidden"
    >
      <Image 
        h="170px" 
        w="100%" 
        src={image}
        alt={`Imagem de ${name}`} 
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
            {name}
          </Heading>

          <Text
            mt="3"
            fontSize="md"
            fontWeight="500"
            color="gray.500"
          >
            {country}
          </Text>
        </Flex>

        <Image 
          h="30px" 
          w="30px" 
          borderRadius="50%"
          objectFit="cover"
          src={flag}
          alt={`Bandeira do ${country}`}
        />
      </Flex>
    </Box>
  )
}