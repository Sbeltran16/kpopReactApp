import React from 'react'
import { Card, Image } from "semantic-ui-react";
import "../../Styling/CardsStyling/Cards.css"

export default function BlackPinkCards() {
  return (
    <>
    <h2 className="membersTitle">Members</h2>
    <Card.Group itemsPerRow={4}>
    <Card>
    <Image
        className="cardImg"
        src="https://www.allkpop.com/upload/2021/03/content/072004/1615165452-lisa.jpg"
        wrapped
        ui={false}
      />
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
    <Image
    className="cardImg"
        src="https://w0.peakpx.com/wallpaper/204/313/HD-wallpaper-jennie-black-dress-blackpink-black-hair-face-beauty-singer-asian-korean-cute.jpg"
        wrapped
        ui={false}
      />
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
    <Image
    className="cardImg"
        src="https://kpopping.com/documents/67/0/1440/220307-BLACKPINK-Rose-Instagram-Update-with-Lisa-2022-Season-s-Greetings-documents-2.jpeg?v=c7f9c"
        wrapped
        ui={false}
      />
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
    <Image
    className="cardImg"
        src="https://media1.popsugar-assets.com/files/thumbor/eEM2-sps8W-aA60HO4gbujjzL44/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/03/01/062/n/1922564/7c85b6d3f3dd2c09_GettyImages-1375347792/i/blackpink-jisoo-plaid-yellow-mini-dress.jpg"
        wrapped
        ui={false}
      />
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
