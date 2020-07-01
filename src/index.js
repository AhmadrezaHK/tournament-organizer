import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import TournamentList from "components/TournamentList";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { loader } from "graphql.macro";
import Loading from 'components/Loading'

const client = new ApolloClient({
    uri: "",
});

const tournamentsQuery = loader("./queries/tournamentsQuery.gql");

function App() {
    const { loading, error, data: { findTournamentsByString: tournaments } = {} } = useQuery(tournamentsQuery);

    if (loading) return <Loading/>;
    if (error) return <p>Error :(</p>;

    return (
        <div style={{ overflow: "hidden" }}>
            <NavBar />
            <TournamentList tournaments={tournaments} />
            <Footer />
        </div>
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
