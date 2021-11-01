import { Grid, GridItem, Heading } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { TravelType } from '../components/TravelType'
import { Separator } from '../components/Separator'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <>
      <Banner />

      <Grid
        w="100%"
        maxW="1160px"
        mt={["10", "32"]}
        mx="auto"
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        gap={[1, 5]}
        justifyContent="space_between"
        align="center"
      >
        <GridItem>
          <TravelType 
            title="Vida noturna"
            icon="cocktail"
            iconAlt="Coquetel"
          />
        </GridItem>

        <GridItem>
          <TravelType 
            title="Praia"
            icon="surf"
            iconAlt="Praia"
          />
        </GridItem>

        <GridItem>
          <TravelType 
            title="Moderno"
            icon="building"
            iconAlt="Prédio"
          /> 
        </GridItem>

        <GridItem>
          <TravelType 
            title="Clássico"
            icon="museum"
            iconAlt="Museu"
          />
        </GridItem>

        <GridItem colSpan={[2, 2, 2, 1]}>
          <TravelType 
            title="E mais..."
            icon="earth"
            iconAlt="Globo terrestre"
          /> 
        </GridItem>
      </Grid>
      
      <Separator />

      <Heading
        mb={["5", "14"]}
        fontWeight="500" 
        fontSize={["lg", "3xl", "4xl"]} 
        textAlign="center"
      >
        Vamos nessa?
        <br/>
        Então escolha seu continente
      </Heading>

      <Slider />
    </>
  )
}