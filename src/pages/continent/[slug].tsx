import { Flex } from '@chakra-ui/react'

import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentContent } from '../../components/ContinentContent'
import { Cities } from '../../components/Cities'

export default function Continent() {
  return (
    <Flex direction="column">
      <ContinentBanner />

      <Flex
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
        direction="column"
      >
        <ContinentContent />

        <Cities />
      </Flex>
    </Flex>
  )
}