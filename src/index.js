import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: "https://web.devk8s.daory.net/graphql",
});

const temp = gql`
    {
        findTournamentsByString(count: 18, offset: 0, fieldName: "paltform", fieldData: "default") {
            game {
                id
                name
            }
            unlisted
            name
            description
            id
            teamSize
            maxTeams
            participantIds
            tournamentStatus
            coverImage
            thumbnail
            deadline
            createdAt
        }
    }
`;

function App() {
    const { loading, error, data } = useQuery(temp);

    console.log(data, loading, error);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return <div className="App">sadasdada</div>;
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById("root")
);
