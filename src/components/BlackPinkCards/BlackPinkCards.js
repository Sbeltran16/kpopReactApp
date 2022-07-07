import React from 'react'
import { Reveal, Card, Image } from "semantic-ui-react";
import "../../Styling/CardsStyling/Cards.css"

export default function BlackPinkCards() {
  return (
    <>
    <h2 className="membersTitle">Members</h2>
    <Card.Group itemsPerRow={4}>
    <Card>
        <Reveal animated='move' instant>
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
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/platinum-series/pl2/113/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
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
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh35/79/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move' instant>
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
         <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swshp/SWSH005/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
    <Reveal animated='move' instant>
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
         <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh4/188/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  </Card.Group>
    </>
  )
}
