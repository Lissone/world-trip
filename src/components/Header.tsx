import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex h="100" justify="center" align="center">
      <Image src="/logo.svg" alt="World Trip"  w="185" h="45"/>
    </Flex>
  )
}