import NewsCard from '@/components/NewsCard';
import React from 'react';

interface CategoryPageParams {
  categoryid: string;
}

interface NewsItem {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  [key: string]: unknown;
}

interface CategoryNewsResponse {
  data: NewsItem[];
}

const CatagoryNews = async ({ params }: { params: Promise<CategoryPageParams> }) => {
  const { categoryid } = await params;

  const res: Response = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`);

  const data: CategoryNewsResponse = await res.json();

  const mainnews: NewsItem[] = data.data;

  return (
    <div>
      <div className='grid grid-cols-3'>
        {mainnews.map((news: NewsItem) => (
          <div key={news.id}> 
            <NewsCard news={news}></NewsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatagoryNews;