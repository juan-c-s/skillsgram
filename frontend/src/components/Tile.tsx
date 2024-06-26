
import { Card, CardContent, Typography, Button, Box} from "@mui/material";

import { TileProps } from "../types/user";


const Tile: React.FC<TileProps> = ({ name, company, position, year_entered, avatar_url, id }) => {
    return (
        <Box className={"w-100 h-100"} bgcolor={"white"} borderRadius={"25%"} boxShadow={3} padding={2}>
            <Box className={"w-100 h-100"} display={"flex"} flexDirection={"column"} padding={2} margin={2}>
                <div className="rounded-full flex items-center justify-center">
                    <img  src={avatar_url} alt="Profile" className="w-100 h-100 rounded-full object-cover" />
                </div>
                <div className="pt-5">
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
                            <Button href={`/profile/${id}`}>Link to profile</Button>
                        </CardContent>
                    </Card>

                </div>
            </Box>
        </Box>
    );
};

export default Tile;
