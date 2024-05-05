import React from "react";
import { Grid } from "@mui/material";
import Tile from "./Tile";
import { TileProps } from "../types";

const TileGrid: React.FC<{ tiles: TileProps[] | undefined}> = ({ tiles }) => {
  return (
    <Grid container spacing={3}>
      {tiles && tiles.map((tile, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Tile {...tile} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TileGrid;