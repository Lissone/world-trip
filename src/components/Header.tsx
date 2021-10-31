import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h={["50px", "100px"]}
      mx="auto"
      px="1rem"
      justify="center" 
      align="center"
    >
      <Image 
        w={["81px", "184px"]} 
        src="/logo.svg" 
        alt="World Trip" 
        justifySelf="center"
      />
    </Flex>
  )
}