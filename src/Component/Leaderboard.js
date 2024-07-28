import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./Leaderboard.css";

const Leaderboard = () => {
  const teams = [];
  for (let i = 0; i < 10; i++) {
    teams.push({
      rank: i + 1,
      name: `Team-${String.fromCharCode(65 + i)}`,
      score: 0,
    });
  }

  return (
    <div className="leader_board_section">
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Team Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr scope="row" key={index}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
