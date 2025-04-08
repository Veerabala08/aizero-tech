import Hero from "../../components/Hero"
import { Container } from "react-bootstrap";
import HeroImage from "../../assets/hero-img.png";
import Stats from "../../components/Stats";
import Carousel from "../../components/Carousel";
import FAQ from "../../components/FAQ";

function Home() {
    const faqData = [
        {
          Question: "Why AIZero?",
          Answer: ` we are on a mission to revolutionize the way businesses operate by harnessing the power of Artificial Intelligence. 
          As a passionate team of innovators, engineers, and problem-solvers, we build intelligent systems that help organizations automate workflows, 
          enhance decision-making, and accelerate digital transfor`
        },
        {
          Question: "What is AIZero?",
          Answer: ` we are on a mission to revolutionize the way businesses operate by harnessing the power of Artificial Intelligence. 
          As a passionate team of innovators, engineers, and problem-solvers, we build intelligent systems that help organizations automate workflows, 
          enhance decision-making, and accelerate digital transfor`
        },
        {
          Question: "How to use AIZero?",
          Answer: ` we are on a mission to revolutionize the way businesses operate by harnessing the power of Artificial Intelligence. 
          As a passionate team of innovators, engineers, and problem-solvers, we build intelligent systems that help organizations automate workflows, 
          enhance decision-making, and accelerate digital transfor`
        }
      ];
      
    return (
        <Container fluid className="px-0">
            <Hero
                HeroImg={HeroImage}
                HeroHeading="Empowering Businesses with Technology!"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Contact Us"
            />
            <Stats />

            <br></br>
            <Container>
                <h3 class="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Reliable Technology. Remarkable Results</h3>
                <p class="opacity-75 w-75 w-sm-100 mx-auto text-center">Trusted solutions for seamless business transformation</p>

            </Container>
            <Carousel />

                <br></br>
            <Container> 
            <h3 class="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Frequently Asked Questions</h3>
                <p class="opacity-75 w-75 w-sm-100 mx-auto text-center">Got questions? We’ve got answers to help you understand how AIZero empowers your business.</p>
                <FAQ
                faqList={faqData}
                />
            </Container> 
            <br></br>
        </Container>
    );
}

export default Home;