import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ news }: { news: { id: string; imageUrl: string; category: string; title: string; description: string } }) => {
    return (
        <div>
          <Link href={`/news/${news.id}`}>
             <div className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                height={600}
                width={600}
                  src={news.imageUrl}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>{news.category}</p>
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
            
            </div>
          </Link>
            </div>
      
    );
};

export default NewsCard;