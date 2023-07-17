// 'use client'
// import { useParams, useSearchParams } from 'next/navigation';
import LoadBlogsData from '@/app/utils/LoadBlogsData';
import LoadSingleBlogData from '@/app/utils/LoadSingleBlogData';
import Link from 'next/link';
import React from 'react';


export const generateMetadata = async ({ params }) => {
    const { title} = await LoadSingleBlogData(params.id);
    return {
      title: title,
      
    };
  };
  
  export const generateStaticParams = async ()=>{
    const blogs = await LoadBlogsData()
    return blogs.map(({id})=>{
            id:id.toString()
    });
  };
const SingleBlogs = async ({params}) => {
    const {id,body,title} = await LoadSingleBlogData(params.id)
    // const [year,id] = params.segments || [];
    // const params2 = useParams()
    // const searchParams2 = useSearchParams()
   
    // console.log(params2.segments.split('/'),searchParams2.get('title'))
    return (
        <div className='block border border-orange-500 p-2 my-4'>
        <h2 className='text-2xl'>{id}-- {title}</h2>
        <p>
            {body}
        </p>
      
              <button className='bg-blue-600 py-2 p-2 mt-2 rounded-lg'>Details</button>

       
    </div>
    );
};

export default SingleBlogs;