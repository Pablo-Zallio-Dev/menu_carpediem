import HeroImage from '../../components/organisms/HeroImage'
import Header from '../../components/organisms/Header'
import BtnLinkMenu from '../../components/atoms/BtnLinkMenu'
import SectionPromotion from '../../components/molecules/SectionPromotion'
import SectionGroup from '../../components/molecules/SectionGroup'
import Timetable from '../../components/molecules/Timetable'
import Footer from '../../components/organisms/Footer'
import Container from '../../components/atoms/Container'

const Home = () => {
      return (
            <Container>
                  <Header />
                  <HeroImage />
                  <section className=" py-3 px-3 ">
                        <BtnLinkMenu />
                        <SectionPromotion />
                        <SectionGroup />
                        <Timetable />
                  </section>
                  <Footer />
            </Container>
      )
}

export default Home