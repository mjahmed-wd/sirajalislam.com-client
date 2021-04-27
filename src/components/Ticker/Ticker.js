import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import "./styles.module.css";

export default function Ticker(props) {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
  ];

  return (
    <div className="ticker">
      <Carousel
        autoPlay={true}
        interval={2000}
        indicators={false}
        animation="fade"
        stopAutoPlayOnHover={true}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2 className="text-center">
        {props.item.name}
      </h2>
    </Paper>
  );
}
