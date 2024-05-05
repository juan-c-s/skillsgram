
import { Card, CardContent, Typography, Button } from "@mui/material";

import { TileProps } from "../types";

const Tile: React.FC<TileProps> = ({ name, company, position, year_entered, avatar_url}) => {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary">
            {position} at {company}
          </Typography>
          <Typography color="textSecondary">
            Year Entered: {year_entered}
          </Typography>
          <Button href={avatar_url}></Button>
        </CardContent>
      </Card>
    );
  };
  
  export default Tile;
  