import { AppWrap, MotionWrap } from '../wrapper'
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides
} from 'keep-react'

const CardCarousel = ({ projects }) => {
  return (
    <Carousel options={{ slidesToScroll: 2 }}>
      <CarouselSlides className='flex'>
        {projects.map((slide) => (
          <CarouselItem key={slide} className='flex-[0_0_50%]'>
            <div className='flex items-center justify-center rounded-xl border border-metal-100 bg-metal-50 h-96 dark:border-metal-900 dark:bg-metal-900'>
              <h1 className='text-heading-1 font-medium text-metal-900 dark:text-white'>{slide}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  )
}

export default AppWrap(MotionWrap(CardCarousel, ''), 'carousel', 'bg-primary')
