import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import SwiperCore, { Pagination,Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination,Navigation])

export function Slider() {
  const continents = [
    { name: 'Europa', description: 'O continente mais antigo', image: '/london.png', path: 'europe' },
    { name: 'Ásia', description: 'O maior continente em área terrestre do mundo', image: '/vietnam.jpg', path: 'asia' },
    { name: 'América do sul', description: 'O continente com a maior biodiversidade do planeta',image: '/rio-de-janeiro.jpg', path: 'south-america' },
    { name: 'América do Norte', description: 'O continente com as maiores reservas mundiais de cobre e chumbo', image: '/los-angeles.jpg', path: 'north-america' },
    { name: 'Oceania', description: 'O menor continente do mundo e também o mais novo', image: '/australia.jpg', path: 'oceania' },
    { name: 'África', description: 'Lar dos maiores safaris do planeta', image: '/africa-do-sul.jpg', path: 'africa' }
  ]

  return (
    <Flex
      h={["250px", "450px"]}
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
          navigation
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 4000 }}
          style={{
            width: "100%",
            flex: '1'
          }}
        >
          {continents.map(continent => (
            <SwiperSlide
              key={continent.name}
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                bgImage={`url('/images${continent.image}')`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
              >
                <Link href={`continent/${continent.path}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]} 
                      fontWeight="bold"
                      color="gray.100"
                    >
                      {continent.name}
                    </Heading>

                    <Text
                      mt={["2", "4"]}
                      fontSize={["0.8rem", "1xl", "2xl"]} 
                      fontWeight="500"
                      color="gray.300"
                    >
                      {continent.description}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
    </Flex>
  )
}