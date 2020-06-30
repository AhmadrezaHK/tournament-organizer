import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import TournamentList from "components/TournamentList";
import NavBar from "components/NavBar"
import { loader } from 'graphql.macro';

const client = new ApolloClient({
    uri: "https://web.devk8s.daory.net/graphql",
});

const tournamentsQuery = loader("./queries/tournamentsQuery.gql");

function App() {
    const { loading, error, data: { findTournamentsByString: tournaments } = {} } = useQuery(tournamentsQuery);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <NavBar />
            <TournamentList tournaments={tournaments} />
        </>
    );
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById("root")
);
