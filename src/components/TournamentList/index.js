import React, { useState, useEffect, Fragment } from "react";
import TournamentCard from "components/TournamentCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useMqProperty } from "hooks";

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

    const spacing = useMqProperty({ xs: 2, sm: 1, md: 3, lg: 6, xl: 8 });

    return (
        <>
            {tournamentTypes.map((type) => (
                <Fragment key={type.key}>
                    <h1 align="center">{type.title}</h1>
                    <Container maxWidth="lg">
                        <Grid container justify="center" spacing={spacing}>
                            {tournamentListData &&
                                tournamentListData[type.key].map((record) => (
                                    <Grid item md={3} sm={4} xs={12} key={record.id}>
                                        <TournamentCard tournament={record} />
                                    </Grid>
                                ))}
                        </Grid>
                    </Container>
                </Fragment>
            ))}
        </>
    );
}
