import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData}) {
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
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res)=> res.json()
  );
  return {
    props: {
      exploreData,
    }
  }
}