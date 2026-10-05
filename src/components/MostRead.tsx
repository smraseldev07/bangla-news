

import type { ReactElement } from 'react';

interface MostReadNews {
  id: string | number;
  title: string;
}

interface MostReadApiResponse {
  data: MostReadNews[];
}

const MostRead = async (): Promise<ReactElement> => {
  const res: Response = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
  const data: MostReadApiResponse = await res.json();

  const news: MostReadNews[] = data.data;

  return (
    <div className="bg-base-100 p-2 border border-gray-400">
      <h1>সর্বাধিক পঠিত</h1>

      <div className="grid gap-3">
        {news.map((n: MostReadNews) => (
          <div key={n.id}>
            <h2>{n.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;