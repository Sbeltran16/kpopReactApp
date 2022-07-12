import React from 'react'
import { Icon, Reveal, Card, Image } from "semantic-ui-react";
import "../../Styling/CardsStyling/Cards.css"


export default function BlackPinkCards() {
  return (
    <>
    <Card.Group centered items={Card} itemsPerRow={6}>
    <Card>
        <Reveal animated='move right' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://www.allkpop.com/upload/2021/03/content/072004/1615165452-lisa.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image className="cardImg" src='https://64.media.tumblr.com/3a382cdd598de8aa85b74f3ee13286ab/b53d6d92280f5816-a8/s250x250_c1/f2c504000f664935eadea0b393a398d46d472152.gifv' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header><h1>Lisa</h1></Card.Header>
        <Card.Description>
          <h3>About</h3>
              Lalisa Manobal, known mononymously as Lisa, is a Thai rapper, singer and dancer based in South Korea. She is a member of the South Korean girl group Blackpink formed by YG Entertainment. Lisa made her solo debut with her single album Lalisa in September 2021.<br/><br/>
              Born: March 27, 1997 (age 25 years), Satuek District, Thailand<br/>
              Height: 5′ 6″<br/>
              Full name: Lalisa Manobal
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.instagram.com/lalalalisa_m/"><Icon color='purple' name='instagram' size='big'/></a>
        <a href="https://www.youtube.com/channel/UC35HKvKYPkri4Grd5KXl3wQ"><Icon color='red' name='youtube' size='big'/></a>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://i.pinimg.com/736x/73/67/d3/7367d3e3c184a9f28da7a61c5c7f6d32.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image className="cardImg" src='https://64.media.tumblr.com/59916a4c5a4597662d940be032200946/tumblr_pmzoiqkWtJ1u6jgl8_400.gifv' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header><h1>Jennie</h1></Card.Header>
        <Card.Description>
        <h3>About</h3>
              Jennie Kim, known mononymously as Jennie, is a South Korean singer and rapper. Born and raised in South Korea, Jennie studied in New Zealand for five years before returning to South Korea in 2010. She debuted as a member of the girl group Blackpink, 
              formed by YG Entertainment, in August 2016.<br/><br/>
              Born: January 16, 1996 (age 26 years), Cheongdam-dong, Seoul, South Korea<br/>
              Height: 5′ 4″<br/>
              Full name: Jennie Kim
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.instagram.com/jennierubyjane/"><Icon color="purple" name='instagram' size='big'/></a>
        <a href="https://www.youtube.com/channel/UCNYi_zGmR519r5gYdOKLTjQ"><Icon color="red" name='youtube' size='big'/></a>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move down' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://www.rollingstone.com/wp-content/uploads/2022/05/R1364_Blackpink_03.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image className="cardImg" src='https://64.media.tumblr.com/264e01082cdbe6f06439dcd5c21154a6/tumblr_pq4tqz38611uqef5eo1_400.gif' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header><h1>Rose</h1></Card.Header>
        <Card.Description>
        <h3>About</h3>
        Born in New Zealand and raised in Australia, Rosé signed with South Korean label YG Entertainment following a successful audition in 2012 and trained for four years before debuting as a member of the girl group Blackpink in August 2016.<br/><br/>
        Born: February 11, 1997 (age 25 years), Auckland, New Zealand<br/>
        Height: 5′ 6″<br/>
        Full name: Roseanne Park<br/>
        Instruments: Vocals
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.instagram.com/roses_are_rosie/"><Icon color="purple" name='instagram' size='big'/></a>
        <a href="https://www.youtube.com/channel/UCBo1hnzxV9rz3WVsv__Rn1g"><Icon color="red" name='youtube' size='big'/></a>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move up' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://i.pinimg.com/736x/13/d5/e7/13d5e78b6cf604996d172ed265f742ba.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image className="cardImg" src='https://64.media.tumblr.com/29abecda54fa21d0920eea5ff376d352/df666fd8ff5cb65c-4a/s400x600/cf73d48d0b0a8b6b6db70f2e4acb69a884111e68.gifv' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header><h1>Jisoo</h1></Card.Header>
        <Card.Description>
        <h3>About</h3>
        Kim Ji-soo, known mononymously as Jisoo, is a South Korean singer and actress. She debuted as a member of the girl group Blackpink, formed by YG Entertainment, in August 2016.<br/><br/>
        Born: January 3, 1995 (age 27 years), Sanbon-dong, Gunpo-si, South Korea<br/>
        Full name: Kim Jisoo<br/>
        Height: 5′ 4″
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="https://www.instagram.com/sooyaaa__/"><Icon color="purple" name='instagram' size='big'/></a>
      </Card.Content>
    </Card>
  </Card.Group>
    </>
  )
}
