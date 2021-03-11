import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    // console.log(props.team);
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team;
    const history = useHistory();
    const handleClick = () =>{
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    return (
        <div id="teamDiv" className="text-center">

        <Card style={{ width: '20rem',border: '0'}}>
        <Card.Img className="mt-4" style={{width: '50%', margin: '0 auto'}}variant="top" src={strTeamBadge} />
        <Card.Body>
            <Card.Title><h3>{strTeam}</h3></Card.Title>
            <Card.Text>Sports type: {strSport}</Card.Text>
            <Button variant="info" onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
        </Card.Body>
        </Card>

        </div>
    );
};

export default Team;