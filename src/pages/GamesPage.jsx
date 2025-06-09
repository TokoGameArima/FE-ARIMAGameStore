import React, { useState } from "react";
import GameDetailModal from "../components/GameDetailModal";
import GameList from "../components/GameList";

function GamesPage() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <>
      <GameList onGameClick={handleGameClick} />
      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </>
  );
}

export default GamesPage;
