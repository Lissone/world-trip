import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { Flex } from '@chakra-ui/react'

import { getPrismicClient } from '../../services/prismic'

import { Loading } from '../../components/Loading'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentContent } from '../../components/ContinentContent'
import { Cities } from '../../components/Cities'

export interface Continent {
  slug: string
  title: string
  description: string
  bannerImage: string
  countries: string
  languages: string
  cities: string
  citiesList: string
  cities100: {
    city: string
    country: string
    thumbnail: string
    flag: string
  }[]
}

interface ContinentProps {
  continent: {
    slug: string
    title: string
    description: string
    bannerImage: string
    countries: string
    languages: string
    cities: string
    citiesList: string
    cities100: {
      city: string
      country: string
      thumbnail: string
      flag: string
    }[]
  }
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
    <Head>
        <title>WorldTrip - {continent.title}</title>
    </Head>

    <Flex direction="column">
      <ContinentBanner continent={continent} />

      <Flex
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
        direction="column"
      >
        <ContinentContent continent={continent} />

        <Cities continent={continent} />
      </Flex>
    </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()

  const continents = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

interface PrismicResponse {
  uid?: string
  data: {
    title: string
    description: string
    banner_image: {
      url: string
    }
    countries: number
    languages: number
    cities: number
    cities_list: string
    cities_100: {
      city: string
      country: string
      thumbnail: {
        url: string
      }
      flag: {
        url: string
      }
    }[]
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  const prismic = getPrismicClient()

  const response: PrismicResponse = await prismic.getByUID('continent', String(slug), {})

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    bannerImage: response.data.banner_image.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    citiesList: response.data.cities_list,
    cities100: response.data.cities_100.map(city => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag: city.flag.url
      }
    })
  }

  return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}