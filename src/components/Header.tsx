import { Flex, Grid, Image, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()

  const notHomePage = asPath !== '/'

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
      <Grid
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        {notHomePage && 
          <Link href="/">
            <a>
              <Icon 
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        }

        <Image 
          w={["81px", "184px"]} 
          src="/logo.svg" 
          alt="World Trip" 
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}