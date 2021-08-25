import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData , cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      {/* in main section there is restriction for max width  */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className = "text-4xl font-semibold pb-5">Explore nearby</h2>
          {/* for cards we will pull some data from server - API endpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard 
            key = {item.img}
            img = {item.img} 
            distance={item.distance} 
            location={item.location} />
          ))}
          </div>
        </section>
        {/* Medium card */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className ="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml">
            {cardsData?.map((item) => (
              <MediumCard 
              img = {item.img}
              title = {item.title}
              />
            ))}
          </div>
          
        </section>
        <LargeCard 
          img = "https://links.papareact.com/4cj"
          title = "The Greatest Outdoors"
          description = "Wishlist curated by Airbnb"
          buttonText = "Get Inspired"
        />
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res)=> res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}