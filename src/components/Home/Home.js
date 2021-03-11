import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import bannerImg from '../../banner.jpeg';
const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="mainDiv">

            <div className="bannerImg">
            <img src={bannerImg} alt=""/>
            <div className="bannerText">
            <p>Soccer Mania</p>
            </div>
            </div>

        <div className="teamsContainer">
            {
                teams.map(team => <Team team={team} key={team.idTeam}></Team>)
            }
        </div>

        </div>
    );
};

export default Home;