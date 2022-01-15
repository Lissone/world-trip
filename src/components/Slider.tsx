import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import SwiperCore, { Pagination,Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination,Navigation])

interface SliderProps {
  continents: {
    slug: string
    title: string
    summary: string
    sliderImage: string
  }[]
}

export function Slider({ continents }: SliderProps) {
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
              key={continent.slug}
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                bgImage={continent.sliderImage}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
              >
                <Link href={`continent/${continent.slug}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]} 
                      fontWeight="bold"
                      color="gray.100"
                    >
                      {continent.title}
                    </Heading>

                    <Text
                      mt={["2", "4"]}
                      fontSize={["0.8rem", "1xl", "2xl"]} 
                      fontWeight="500"
                      color="gray.300"
                    >
                      {continent.summary}
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