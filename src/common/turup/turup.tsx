"use client";


import React, { useState } from "react";

type ExtraScoreType = "Hearts" | "Diamond" | "Clubs" | "Spades" | "None";

const Turup = () => {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [extraScores, setExtraScores] = useState<{
        [key in ExtraScoreType]: number;
    }>({
        Hearts: 0,
        Diamond: 0,
        Clubs: 0,
        Spades: 0,
        None: 0,
    });



    const handlePlayerScore = (player: any) => {
        if (player === 1) {
            setPlayer1Score((prev) => prev + 1);
        } else {
            setPlayer2Score((prev) => prev + 1);
        }
    };

    const handleExtraScore = (type: ExtraScoreType) => {
        setExtraScores((prevScores) => ({
            ...prevScores,
            [type]: prevScores[type] + 1,
        }));
    };



    const handleReset = () => {
        setPlayer1Score(0);
        setPlayer2Score(0);
        setExtraScores({
            Hearts: 0,
            Diamond: 0,
            Clubs: 0,
            Spades: 0,
            None: 0,
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Score Tracker</h1>

            <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
                        onClick={() => handlePlayerScore(1)}
                    >
                        Player 1 Score
                    </button>
                    <span className="text-lg font-semibold mt-2">{player1Score}</span>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
                        onClick={() => handlePlayerScore(2)}
                    >
                        Player 2 Score
                    </button>
                    <span className="text-lg font-semibold mt-2">{player2Score}</span>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4 mb-6">
                {Object.keys(extraScores).map((type) => (
                    <div key={type} className="flex flex-col items-center">
                        <button
                            className="bg-[#000000] text-white py-2 px-4 rounded-lg shadow-md"
                            onClick={() => handleExtraScore(type as ExtraScoreType)}
                        >
                            {type}
                        </button>
                        <span className="text-lg font-semibold mt-2">
                            {extraScores[type as ExtraScoreType]}
                        </span>
                    </div>
                ))}
            </div>
            <button
                className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md"
                onClick={handleReset}
            >
                Start
            </button>
        </div>
    );
};

export default Turup;
