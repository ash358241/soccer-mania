import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import malePlayerImg from "../../male.png";
import femalePlayerImg from "../../female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faFlag,
  faFootballBall,
  faMars,
  faGlobeAsia
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams));
  }, [id]);
  const {
    strStadiumThumb,
    intFormedYear,
    strTeam,
    strCountry,
    strGender,
    strSport,
    strTeamBadge,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
    strWebsite,
  } = team[0] || {};

  let playerImg;
  if (strGender === "Male") {
    playerImg = <img style={{ width: "100%" }} src={malePlayerImg} alt="" />;
  } else if (strGender === "Female") {
    playerImg = <img style={{ width: "100%" }} src={femalePlayerImg} alt="" />;
  }
  else{
    playerImg = <img style={{ width: "100%" }} src={femalePlayerImg} alt="" />;
  }
  

  return (
    <div className="teamDiv">
      <div className="teamBannerImg">
        <img style={{ width: "100%", height: "300px", opacity: "0.5" }} src={strStadiumThumb} alt="" />
        <div className="teamLogo">
        <img style={{ height: "150px" }} src={strTeamBadge} alt="" />
        </div>
      </div>

      <div className="teamFeature">
          <br/>
          <br/>
        <div className="teamContainer">
            <div className="teamInfo px-2">
            <h3>{strTeam}</h3>
            <p>
            <FontAwesomeIcon icon={faHistory} /> Founded: {intFormedYear}
            </p>
            <p>
            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
            </p>
            <p>
            <FontAwesomeIcon icon={faFootballBall} /> Sport type: {strSport}
            </p>
            <p>
            <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
            </p>
            </div>
            <div className="teamPlayerImg px-2">{playerImg}</div>
        </div>
        <br/>
        <br/>
            <p style={{ width: "80%", margin: "0 auto" }}>{strDescriptionEN}</p>
        <br/>
        <br/>
        <div className="links text-center">
            <a target="blank" href={"//" + strWebsite}>
            <FontAwesomeIcon icon={faGlobeAsia} size="2x" />
            </a>
            <a target="_blank" rel="noreferrer" href={"//" + strTwitter}>
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "#1DA1F2", marginLeft: "20px" }}/>
            </a>
            <a target="_blank" rel="noreferrer" href={"//" + strFacebook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#3B5998", marginLeft: "20px" }} />
            </a>
            <a target="_blank" rel="noreferrer" href={"//" + strYoutube}>
            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: "red", marginLeft: "20px" }} />
            </a>
        </div>
        <br/>
        <br/>
        </div>
    </div>
    );
};

export default TeamDetails;
