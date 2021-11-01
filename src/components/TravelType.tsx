import { Flex, Image, Text } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'

interface TravelTypeProps {
  title: string
  icon: string
  iconAlt: string
}

export function TravelType({ title, icon, iconAlt }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
      {isMobile ?
      (
        <Image 
          w="85px"
          h="85px"
          mb={6}
          src={`/icons/${icon}.svg`} 
          alt={iconAlt} 
        />
      ) : (
        <Text
          mr={2}
          fontSize="4xl"
          color="yellow.400"
        >
          •
        </Text>
      )}

      <Text 
        fontSize={["md", "xl", "2xl"]}
        fontWeight="600" 
        color="gray.700"
      >
        {title}
      </Text>
    </Flex>
  )
}