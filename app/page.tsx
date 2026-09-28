import Hero from '@/components/Hero';
import CompanyIntro from '@/components/CompanyIntro';
import Projects from '@/components/Projects';
import Apartments from '@/components/Apartments';
import PaymentPlans from '@/components/PaymentPlans';
import PaymentCalculator from '@/components/PaymentCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import ConstructionProgress from '@/components/ConstructionProgress';
import Location from '@/components/Location';
import InquiryForm from '@/components/InquiryForm';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Projects />
      <Apartments />
      <PaymentPlans />
      <PaymentCalculator />
      <WhyChooseUs />
      <ConstructionProgress />
      <Location />
      <InquiryForm />
      <ContactSection />
    </>
  );
}
