import { 
  Flex, 
  Heading, 
  Text, 
  Icon,
  Popover, 
  PopoverTrigger, 
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

import { Continent } from '../../pages/continent/[slug]'

interface InformationProps {
  continent: Continent
}

export function Information({ continent }: InformationProps) {
  return (
    <Flex
      align="center"
      justifyContent="space-between"
    >
      <Flex
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          fontWeight="500"
          color="yellow.400"
        >
          {continent.countries}
        </Heading>

        <Text
          fontSize={["md", "xl"]}
          fontWeight="500"
          color="gray.600"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          fontWeight="500"
          color="yellow.400"
        >
          {continent.languages}
        </Heading>

        <Text
          fontSize={["md", "xl"]}
          fontWeight="500"
          color="gray.600"
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          fontWeight="500"
          color="yellow.400"
        >
          {continent.cities}
        </Heading>

        <Text
          fontSize={["md", "xl"]}
          fontWeight="500"
          color="gray.600"
        >
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon 
                  as={RiInformationLine}
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                  cursor="pointer" 
                  ml="1"
                  color="gray.400"
                />
              </span>
            </PopoverTrigger>

            <PopoverContent bg="gray.600" color="yellow.400">
              <PopoverArrow bg="gray.600" />
              <PopoverCloseButton />

              <PopoverBody fontWeight="400" fontSize="lg">
                {continent.citiesList}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}