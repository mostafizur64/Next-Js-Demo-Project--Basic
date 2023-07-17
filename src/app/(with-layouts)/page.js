import Image from 'next/image';
import img from '../../../public/assets/home.jpg'
import Categories from '../components/HomePage/categories';
import PopularProduct from '../components/HomePage/PopularProduct';
import { Suspense } from 'react';
export const revalidate = 5;
const HomePage = () => {
  return (
    <main className='container mx-auto'>


      <Categories />
               
      <Suspense fallback={ <h1 className='text-center text-red-900 font-bold text-2xl'>Loading......</h1>}>
        <PopularProduct />
      </Suspense>
      {/* <Image src='https://img.freepik.com/free-photo/beautiful-aerial-view-with-green-forest-landscape-twilight_74190-7498.jpg?w=740&t=st=1687784959~exp=1687785559~hmac=8e19d82ee7d2eb098cb63c43913dcf91b4d8f2371bd279209cb8e6e8ac9acfb6' width={600} height={381.4} alt="image" /> */}
      {/* <Image src={img}
        placeholder='blur'
        width={600}
        height={381.4}
      ></Image> */}
      <Image className='mt-12' src='/nature.jpg'
        placeholder='blur'
        width={600}
        height={381.4}
        blurDataURL='data:image/webp;base64,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'
       alt='/'/>
    </main>
  );
};

export default HomePage;
