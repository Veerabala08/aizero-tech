import Card from "../../components/Card";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import Applications from "../../assets/s1.jpg";
import Timeline from "../../components/TimeLine";
import serviceimage from "../../assets/service.png";
import AboutUS from "../../assets/aiaboutus.png"

function Services() {
    const cardText = "We provide innovative solutions to help businesses thrive in the digital age.";
    return (
        <Container fluid className="px-0">
            <Hero
                HeroImg={serviceimage}
                HeroHeading="Technology Services and Solutions"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Learn More"
            />
            <Container>
                <h3 class="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Solutions You Can Trust</h3>
                <p class="opacity-75 w-75 w-sm-100 mx-auto text-center">Trusted solutions for seamless business transformation</p>
                <div class="d-flex flex-wrap justify-content-center gap-5 mt-5 mb-6 pb-5">
                    <Card CardImg={Applications} imgAlt="Image" CardText={cardText} />
                    <Card CardImg={Applications} imgAlt="Image" CardText={cardText} />
                    <Card CardImg={Applications} imgAlt="Image" CardText={cardText} />
                    <Card CardImg={Applications} imgAlt="Image" CardText={cardText} />
                    <Card CardImg={Applications} imgAlt="Image" CardText={cardText} />
                    <Card CardImg={Applications} imgAlt="Image" CardText={cardText} />
                </div>
            </Container>
            <Timeline />
        </Container>
    );
}

export default Services;