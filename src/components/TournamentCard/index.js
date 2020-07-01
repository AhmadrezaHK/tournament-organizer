import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import './index.scss'

export default function TournamentCard({ tournament }) {
    return (
        <Card className="card">
            <CardActionArea>
                <CardMedia image={tournament.thumbnail} title="Contemplative Reptile" className="card-image" />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h6">
                        {tournament.game.name}
                    </Typography>
                    <Box mb="1rem">
                        <Typography noWrap variant="subtitle1" component="h6" className="tournament-name">
                            {tournament.name}
                        </Typography>
                    </Box>
                    <Box mb="1rem">
                        <Typography gutterBottom variant="body2" component="p">
                            Date: {dayjs(tournament.deadline).format("MMM D, YYYY HH:mm A")}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                            Team Size: {tournament.teamSize}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                            {tournament.participantIds.length} / {tournament.maxTeams} Registered
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
