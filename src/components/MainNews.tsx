import Image from 'next/image';
import React from 'react';

interface news {
    id : string;
    title : string;
    description : string
    category : string
    imageUrl : string

}

const MainNews = ({news} : {news : news[]}) => {

const firstnews = news[0]
const othernews = news.slice(1)


    
    return (
  <div className='flex gap-4'>
         <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
    height={600}
    width={600}
      src={firstnews.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p>{firstnews.category}</p>
    <h2 className="card-title">{firstnews.title}</h2>
    <p>{firstnews.description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>

</div>
  <div className='grid gap-2.5' >{othernews.slice(0,4).map(on => <div className='border px-5 py-3'  key={on.id}>
    <div> <p>{on.category}</p>
        {on.title}</div> 
    </div>)}</div>
  </div>

    );
};

export default MainNews;