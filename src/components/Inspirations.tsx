import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'
import Img01 from '../assets/images/Rectangle 24.png'
import Img02 from '../assets/images/Rectangle 25.png'


const Inspirations = () => {

    const images = [Img01, Img02, Img01, Img02];
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;
      emblaApi.on('select', onSelect);
      onSelect();
    }, [emblaApi, onSelect]);

    
    return (
      <div className='my-15 w-full bg-begeligth h-102 flex items-center'>
        <div className='info-column'>
            <h2 className=" font-poppins-bold text-4.5xl text-gray1 leading-none">50+ Beautiful rooms inspiration</h2>
            <p className=' font-poppins-medium text-gray2 mt-4 mb-7'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <Link to={'/shop'}>
                <button className=" w-44 h-12 text-center font-poppins-semibold py-3 bg-mostarda text-white transition-all hover:scale-105 hover:bg-darkmostarda hover:font-poppins-bold">Explore More</button>
            </Link>     
        </div>
        <div className="carousel-column">
            <div ref={emblaRef} className="embla">
                <div className="embla__container">
                    {images.map((src, index) => (
                        <div key={index} className={`embla__slide ${index === 0 ? 'first-slide' : ''}`}>
                            <img src={src} alt={`Slide ${index + 1}`} className={`carousel-image ${selectedIndex === index ? 'is-selected' : ''}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__dots">
                {images.map((_, index) => (
                    <button key={index}
                    className={`embla__dot ${selectedIndex === index ? 'is-selected' : ''}`}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
      </div>
    );
}

export default Inspirations