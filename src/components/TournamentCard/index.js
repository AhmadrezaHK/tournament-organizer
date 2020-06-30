import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";

const useStyles = makeStyles(theme=>({
    card: {
        [theme.breakpoints.only("xs")]: {
            maxWidth: '260px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
}));

export default function TournamentCard({ tournament }) {
    const $class = useStyles()
    return (
        <Card className={$class.card}>
            <CardActionArea>
                <CardMedia image={tournament.thumbnail} title="Contemplative Reptile" style={{ height: "12.5rem" }} />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h6">
                        {tournament.game.name}
                    </Typography>
                    <Box mb="1rem">
                        <Typography noWrap variant="subtitle1" component="h6" style={{ fontWeight: "bold" }}>
                            {tournament.name}
                        </Typography>
                    </Box>
                    <Box mb="1rem">
                        <Typography gutterBottom variant="body2" component="p">
                            Date: {dayjs(tournament.deadline).format("MMMM D, YYYY HH:mm A")}
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