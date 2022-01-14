import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { Grid, GridItem, Heading } from '@chakra-ui/react'

import { getPrismicClient } from '../services/prismic'

import { Banner } from '../components/Banner'
import { TravelType } from '../components/TravelType'
import { Separator } from '../components/Separator'
import { Slider } from '../components/Slider'

export interface Continent {
  slug: string
  title: string
  summary: string
  sliderImage: string
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
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

      <Slider continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      sliderImage: continent.data.slider_image.url
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}