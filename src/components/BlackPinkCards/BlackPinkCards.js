import React from 'react'
import { Icon, Reveal, Card, Image } from "semantic-ui-react";
import "../../Styling/CardsStyling/Cards.css"

export default function BlackPinkCards() {
  return (
    <>
    <h2 className="membersTitle">Members</h2>
    <Card.Group centered items={Card} itemsPerRow={6}>
    <Card>
        <Reveal animated='move right' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://www.allkpop.com/upload/2021/03/content/072004/1615165452-lisa.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image src='https://64.media.tumblr.com/3a382cdd598de8aa85b74f3ee13286ab/b53d6d92280f5816-a8/s250x250_c1/f2c504000f664935eadea0b393a398d46d472152.gifv' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header>Lisa</Card.Header>
        <Card.Description>
          <p> Lalisa Manobal is a member of blackpink</p> 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.instagram.com/lalalalisa_m/"><Icon name='instagram' size='big'/></a>
        <a href="https://www.youtube.com/channel/UC35HKvKYPkri4Grd5KXl3wQ"><Icon name='youtube' size='big'/></a>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://i.pinimg.com/736x/73/67/d3/7367d3e3c184a9f28da7a61c5c7f6d32.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image src='https://64.media.tumblr.com/59916a4c5a4597662d940be032200946/tumblr_pmzoiqkWtJ1u6jgl8_400.gifv' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header>Jennie</Card.Header>
        <Card.Description>
        <p>Jennie Kim is a member of blackpink</p> 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.instagram.com/jennierubyjane/"><Icon name='instagram' size='big'/></a>
        <a href="https://www.youtube.com/channel/UCNYi_zGmR519r5gYdOKLTjQ"><Icon name='youtube' size='big'/></a>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move down' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://www.rollingstone.com/wp-content/uploads/2022/05/R1364_Blackpink_03.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image src='https://64.media.tumblr.com/264e01082cdbe6f06439dcd5c21154a6/tumblr_pq4tqz38611uqef5eo1_400.gif' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header>Rose</Card.Header>
        <Card.Description>
        <p>Chaeyoung Park is a member of blackpink</p> 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://www.instagram.com/roses_are_rosie/"><Icon name='instagram' size='big'/></a>
        <a href="https://www.youtube.com/channel/UCBo1hnzxV9rz3WVsv__Rn1g"><Icon name='youtube' size='big'/></a>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move up' instant>
        <Reveal.Content visible>
        <Image className="cardImg" src='https://i.pinimg.com/736x/13/d5/e7/13d5e78b6cf604996d172ed265f742ba.jpg' size="xlarge" />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Image src='https://64.media.tumblr.com/29abecda54fa21d0920eea5ff376d352/df666fd8ff5cb65c-4a/s400x600/cf73d48d0b0a8b6b6db70f2e4acb69a884111e68.gifv' size='large' />
        </Reveal.Content>
        </Reveal>
      <Card.Content>
        <Card.Header>Jisoo</Card.Header>
        <Card.Description>
        <p>Jisoo Kim is a member of blackpink</p> 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a href="https://www.instagram.com/sooyaaa__/"><Icon name='instagram' size='big'/></a>
      </Card.Content>
    </Card>
  </Card.Group>
    <h2 className='membersTitle'>Music Videos</h2>
    <div className='videos'>
      <iframe 
        width="600" 
        height="350"
        src="https://www.youtube.com/embed/IHNzOHi8sJs" 
        title="BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <iframe 
          width="600" 
          height="350" 
          src="https://www.youtube.com/embed/ioNng23DkIM" 
          title="BLACKPINK - 'How You Like That' M/V" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      <iframe 
          width="600" 
          height="350" 
          src="https://www.youtube.com/embed/Amq-qlqbjYA" 
          title="BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
    </div>
    </>
  )
}
