'use client'
import UserAttractionSection from '@/app/components/UserAttractionSection/page'
import CodeLearningApp from '@/app/components/CodeLearningApp/page'
import Nav from '@/app/components/Nav/page'
import HomePage from './components/Quiz/page'
import AboveFooterSection from './components/AboveFooterSection/page'
import AboveAboveFooterSection from './components/AboveAboveFooterSection/page'
import CenteredSection from './components/CenteredSection/page'
import GetCertifiedSection from './components/GetCertifiedSection/page'

const Home = () => {

  return (
    <div className="bg-gray-100 min-h-screen">

      <Nav />
      <CodeLearningApp />
      <CenteredSection />
      <UserAttractionSection />
      <HomePage />
      <GetCertifiedSection />
      <AboveAboveFooterSection />
      <AboveFooterSection />
    </div>
  );
};

export default Home;
