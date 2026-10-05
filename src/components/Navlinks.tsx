import Link from 'next/link';

interface ITopic {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async() => {
const res = await fetch("https://news-api-v2.vercel.app/api/categories")



const data =  await res.json()

const navdata:ITopic[] = data.data



const filternav = navdata.filter(n=> n.scrapable)







    return (
        <div className='flex gap-8 justify-center mt-7'>
            {
            filternav.map((n , index) => <Link key={index} href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default Navlinks;