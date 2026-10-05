import MainNews from "@/components/MainNews";
import Marque from "@/components/Marque";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";


export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()

const section = data.data
const mainnews = section[0].articles

const othernews = section.slice(1)






  return (
    <div >
    <Marque></Marque>

    <div className="grid grid-cols-3 max-w-7xl mx-auto">
      {/* news */}
      <div className=" col-span-2" >
     <MainNews news = {mainnews}></MainNews>

     <div className="mt-5 grid gap-5">
      {
        othernews.map((os: { curationId: string; title: string; articles: Array<{ id: string | number; imageUrl: string; category: string; title: string; description: string }> }) => (
          <div className="border-b-2 border-red-600" key={os.curationId}>
            <h1 className="font-bold">{os.title}</h1>

            <div className="grid grid-cols-3 gap-4">
              {os.articles.map((news) => {
                const article = { ...news, id: String(news.id) };
                return <NewsCard key={article.id} news={article}></NewsCard>;
              })}
            </div>
          </div>
        ))
      }
     </div>
      </div>

      {/* most read */}
      <div className="col-span-1 ">

        <MostRead></MostRead>

      </div>
    </div>
    </div>
  );
}
