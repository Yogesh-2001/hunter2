import HomeSection from '../components/HomeSection'
import TeamSection from '../components/TeamSection'
import RecruitersLogos from '../components/RecruitersLogo'
import Footer from '../components/Footer'
import Accordation from '../components/Accordation'
import SendMail from '../components/sendMails'
const HomePage = () => {
  return (
    <>
      <HomeSection />
      <RecruitersLogos />
      <TeamSection />
      <Accordation />
      <SendMail />
      <Footer />
    </>
  )
}

export default HomePage