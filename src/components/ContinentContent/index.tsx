import { Grid, Text } from '@chakra-ui/react'

import { Continent } from '../../pages/continent/[slug]'

import { Information } from './Information'

interface ContinentContentProps {
  continent: Continent
}

export function ContinentContent({ continent }: ContinentContentProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text 
        fontSize={["lg", "xl", "xl", "2xl"]}
        textAlign="justify"
        color="gray.600"
      >
        {continent.description}
      </Text>

      <Information continent={continent} />
    </Grid>
  )
}