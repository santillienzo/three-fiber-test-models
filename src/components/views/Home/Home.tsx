import {useContext, useEffect, useState} from 'react'
// import required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import style from './Home.module.css'
import ProductCard from '../../features/ProductCard/ProductCard';
import { ProductService } from '../../../services/ProductService';
import { Product } from '../../../types/Product';
import { ICategoryContext } from '../../../types/Providers';
import CategoryContext from '../../providers/CategoryProvider';


const Home = () => {
  const {selectedCategory} = useContext<ICategoryContext>(CategoryContext)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await ProductService.getProductInCategory(selectedCategory.name);
      setProducts(productsData);
    };

    fetchProducts();
  }, [selectedCategory]);

  
  return (
      <section className={style.wrapper}>
        <div className={style.category_name_container}>
          <h2>{selectedCategory.beautifulName}</h2>
        </div>
        <Swiper loop={true} navigation={true} modules={[Navigation]} className={style.swipper}>
          {
            products.map((product, index)=>(
              <SwiperSlide key={index}><ProductCard product={product}/></SwiperSlide>
            ))
          }
        </Swiper>
      </section>
  )
}

export default Home