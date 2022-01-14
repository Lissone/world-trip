import { Flex, Spinner } from '@chakra-ui/react'

export function Loading() {
  return (
    <Flex
      w= "100vw"
      h="100vh"
      zIndex="20"
      position="fixed"
      align="center"
      justify="center"
      bg="rgba(245, 248, 250, .9)"
      top="0"
      right="0"
    >
      <Spinner size="xl" color="yallow.400" />
    </Flex>
  )
}