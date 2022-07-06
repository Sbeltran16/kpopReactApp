import React from 'react'
import { Card, Image } from "semantic-ui-react";
import "../../Styling/CardsStyling/Cards.css"

export default function btsCards() {
  return (
    <>
    <h2 className="membersTitle">Members</h2>
    <Card.Group centered items={Card} itemsPerRow={4}>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://assets.teenvogue.com/photos/5db855b883e32700089e9db9/master/w_2295,h_3442,c_limit/GettyImages-1140670826.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>RM</Card.Header>
        <Card.Description>
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/platinum-series/pl2/113/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://i.mydramalist.com/X5dlw_5f.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Jin</Card.Header>
        <Card.Description>
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh35/79/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://assets.teenvogue.com/photos/5cd5e6746fd984e01a6cfc45/2:3/w_1332,h_1998,c_limit/00-promo-suga.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>SUGA</Card.Header>
        <Card.Description>
         <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swshp/SWSH005/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://upload.wikimedia.org/wikipedia/commons/8/8b/J-Hope_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_05_%28cropped%29.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>J-Hope</Card.Header>
        <Card.Description>
         <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh4/188/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://www.allkpop.com/upload/2019/09/content/140751/1568461869-img-20190616-113809.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Jimin</Card.Header>
        <Card.Description>
          <a href="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/platinum-series/pl2/113/">Card Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://assets.teenvogue.com/photos/5df7d4e2ca93a4000985378e/2:3/w_1588,h_2382,c_limit/tout.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>V</Card.Header>
        <Card.Meta>
          <span>Price $25.99</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://genius.com/albums/Daft-punk/Random-access-memories">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card className="card">
    <Image
        className="cardImg"
        src="https://assets.teenvogue.com/photos/628d0964d78695ef5da24f30/master/pass/GettyImages-1389408711.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Jungkook</Card.Header>
        <Card.Meta>
          <span>Price $29.99</span>
        </Card.Meta>
        <Card.Description>
          <a href="https://genius.com/albums/Bad-bunny/Un-verano-sin-ti">Album Details</a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  </Card.Group>
    </>
  )
}
