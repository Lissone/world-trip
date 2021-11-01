import { Heading, Grid } from '@chakra-ui/react'

import { City } from './City'

export function Cities() {
  return (
    <>
      <Heading
        fontSize={["2xl", "4xl"]}
        fontWeight="500"
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid
        px={["30px", "0"]}
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
      >
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </>
  )
}