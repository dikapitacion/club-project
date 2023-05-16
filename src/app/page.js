"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import styles from './page.module.css'
import CarouselFadeExample from './components/carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import CardGroup from 'react-bootstrap/CardGroup';
import BasicExample from './components/cards';
import Navi from './components/navbar';


const cardData = [
  {title:"Responsive Design",
  image:"graphic-tablet.png"},
  {title:"Business Solutions",
  image:"presentation.png"},
  {title:"Brand Identity",
  image:"mountains.png"}
]
export default function Home() {
  const cards = cardData.map((data)=>{
    return(
      <BasicExample image = {data.image} title = {data.title}/>
    )
  })
  return (
    <>
    <Navi/>
    <Stack style={{display:'flex', justifyContent:'center'}}>
      <div className='mb-4 h-50 car'>
      <CarouselFadeExample/>
      </div>
      <Container>
        <Row className='row'>
        <Col className='col'>
        <h1>Our Services</h1>
        </Col>
        </Row>
        <CardGroup>
          {cards}
        </CardGroup>
      </Container>
      </Stack>
      </>
  )
}
