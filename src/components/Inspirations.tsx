import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'
import Img01 from '../assets/images/Rectangle 24.png'
import Img02 from '../assets/images/Rectangle 25.png'
import Right from '../assets/images/Right 16px.png'


const Inspirations = () => {

    const images = [Img01, Img02];
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, containScroll: "trimSnaps" });
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
        <div className="embla">
            <div ref={emblaRef} className="embla-viewport">
                <div className="embla-container relative">
                    <div className=" bg-mostarda w-12 h-12 flex justify-center items-center absolute bottom-7 left-64 z-20 " >
                        <img src={Right} alt="Right arrow" />
                    </div>
                    <div className=" flex flex-col justify-center pl-6 bg-white bg-opacity-65 w-56 h-32 absolute bottom-7 left-8 z-10 ">
                        <span className=" font-poppins-medium text-gray2">01 - Bed Room</span>
                        <h3 className=" font-poppins-semibold text-3xl text-gray1">Inner Peace</h3>
                    </div>
                    
                    {images.map((img, index) => (
                        <div key={index} className={`embla-slide ${index === selectedIndex ? 'embla-slide--selected' : ''}`}>
                            <img src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla-dots">
                {images.map((_, index) => (
                    <button 
                    key={index}
                    className={index === selectedIndex ? 'active' : ''}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
      </div>
    );
}

export default Inspirations