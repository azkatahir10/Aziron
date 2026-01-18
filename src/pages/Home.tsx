import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import Stats from '../components/Stats'
import CTABanner from '../components/CTABanner'

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}

export default Home