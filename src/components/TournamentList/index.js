import React, { useState, useEffect, Fragment } from "react";
import TournamentCard from "components/TournamentCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useMqProperty } from "hooks";
import "./index.scss";

export default function TournamentList({ tournaments }) {
    const [tournamentListData, setTournamentListData] = useState();
    const tournamentTypes = [
        { key: "currentTournaments", title: "Current Tournaments" },
        { key: "pastTournaments", title: "Past Tournaments" },
    ];

    useEffect(() => {
        tournaments &&
            setTournamentListData(
                tournaments.reduce(
                    (sum, curr) => {
                        const isTournamentCurrent = ["NEW", "LIVE"].includes(curr.tournamentStatus);
                        return {
                            currentTournaments: isTournamentCurrent ? [...sum.currentTournaments, curr] : sum.currentTournaments,
                            pastTournaments: !isTournamentCurrent ? [...sum.pastTournaments, curr] : sum.pastTournaments,
                        };
                    },
                    {
                        currentTournaments: [],
                        pastTournaments: [],
                    }
                )
            );
    }, [tournaments]);

    const spacing = useMqProperty({ xs: 6, sm: 6, md: 6, lg: 6, xl: 8 });

    return (
        <Box pb="4rem">
            {tournamentTypes.map((type) => (
                <Fragment key={type.key}>
                    <Box py="2rem">
                        <h1 align="center" className="card-category-heading">
                            {type.title}
                        </h1>
                    </Box>
                    <Box pt="1rem" pb="2rem">
                        <Grid container justify="center">
                            <Grid item xs={12} md={8} lg={7} sm={10}>
                                <Grid container spacing={spacing} justify="center">
                                    {tournamentListData &&
                                        tournamentListData[type.key].map((record) => (
                                            <Grid item lg={4} md={6} sm={6} xs={9} key={record.id} className="card-container">
                                                <TournamentCard tournament={record} />
                                            </Grid>
                                        ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Fragment>
            ))}
        </Box>
    );
}
