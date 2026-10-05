import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface imark {
    id : 'string'
    title : 'string'
}
const Marque = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()

    const maindata : imark[] = data.data 

 
    
    return (
        <div className="bg-red-600 text-white">
           <div className="flex max-w-7xl mx-auto">
             <div className="bg-red-700 px-3">সর্বশেষ</div>
             <MarqueeText direction="right">
            {
                maindata.map(m  => <span key={m.id}>
                    <span>{m.title}</span>
                    <span className="mx-5">•</span>
                </span>)
            } </MarqueeText>
           </div>
        </div>
    );
};

export default Marque;