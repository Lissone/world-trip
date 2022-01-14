import { Heading, Grid } from '@chakra-ui/react'

import { Continent } from '../../pages/continent/[slug]'

import { City } from './City'

interface CityProps {
  continent: Continent
}

export function Cities({ continent }: CityProps) {
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
        {continent.cities100.map(city => (
          <City
            key={city.city}
            name={city.city}
            country={city.country}
            flag={city.flag}
            image={city.thumbnail}
          />
        ))}
      </Grid>
    </>
  )
}