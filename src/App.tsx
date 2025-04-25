import React, { useState } from "react";

export default function App() {
  const [visibleFact, setVisibleFact] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const facts = [
    {
      title: "💰 Economic Power",
      detail:
        "Copper mining makes up nearly half of Chile's exports. It's a huge part of the country's economy and jobs!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Copper_Mining_Chile.jpg",
    },
    {
      title: "⛏️ Chuquicamata Mine",
      detail:
        "Chuquicamata is one of the world’s largest open-pit copper mines and is located in northern Chile. It's so big it can be seen from space!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Chuquicamata_mine.jpg",
    },
    {
      title: "🌍 Global Leader",
      detail:
        "Chile produces over 5.6 million metric tons of copper every year—more than any other country on Earth.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Copper_Cathodes.jpg",
    },
    {
      title: "🏗️ Mining Towns",
      detail:
        "Industrialization led to new mining towns like Calama, built near mines where people moved for work.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Calama_Chile.jpg",
    },
    {
      title: "🌎 Environmental Concerns",
      detail:
        "Mining uses tons of water and electricity, which affects local ecosystems and communities.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Copper_mine_environment.jpg",
    },
    {
      title: "🔋 Green Future",
      detail:
        "Chile is using solar power and eco-friendly methods to make copper mining cleaner and sustainable.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Solar_Plant_Desert.jpg",
    },
  ];

  const quizQuestions = [
    {
      question: "What percentage of Chile's exports come from copper?",
      options: ["10%", "25%", "50%", "70%"],
      correct: 2,
    },
    {
      question: "Which Chilean mine is visible from space?",
      options: ["Escondida", "Radomiro Tomic", "Chuquicamata", "El Teniente"],
      correct: 2,
    },
    {
      question: "What energy source is Chile using to make mining greener?",
      options: ["Wind", "Solar", "Hydro", "Geothermal"],
      correct: 1,
    },
  ];

  const handleAnswer = (qIndex, oIndex) => {
    setQuizAnswers({ ...quizAnswers, [qIndex]: oIndex });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) score++;
    });
    return score;
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#cc6600" }}>🔍 Discover Copper Mining in Chile</h1>
      <p>Click each button to reveal a fun fact!</p>

      {facts.map((fact, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <button
            onClick={() => setVisibleFact(visibleFact === index ? null : index)}
            style={{
              padding: "0.7rem 1rem",
              backgroundColor: "#ffd966",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              textAlign: "left",
            }}
          >
            {fact.title}
          </button>
          {visibleFact === index && (
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginTop: "0.5rem",
              }}
            >
              <p>{fact.detail}</p>
              {fact.image && (
                <img
                  src={fact.image}
                  alt={fact.title}
                  style={{
                    width: "100%",
                    marginTop: "0.5rem",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
          )}
        </div>
      ))}

      <h2 style={{ marginTop: "2rem" }}>
        📖 Timeline: Key Moments in Chilean Copper Mining
      </h2>
      <ul style={{ lineHeight: "1.6", paddingLeft: "1rem" }}>
        <li>
          <strong>1905:</strong> Chuquicamata begins operations.
        </li>
        <li>
          <strong>1981:</strong> Escondida mine opens.
        </li>
        <li>
          <strong>2020s:</strong> Shift to renewable energy like solar for
          mining.
        </li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>🧠 Ready to test your knowledge?</h2>
      {!quizStarted ? (
        <button
          onClick={() => setQuizStarted(true)}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#cc6600",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Start Quiz
        </button>
      ) : (
        <div style={{ marginTop: "1rem" }}>
          {quizQuestions.map((q, qi) => (
            <div key={qi} style={{ marginBottom: "1.5rem" }}>
              <p>
                <strong>{q.question}</strong>
              </p>
              {q.options.map((opt, oi) => (
                <label
                  key={oi}
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  <input
                    type="radio"
                    name={`q${qi}`}
                    value={oi}
                    checked={quizAnswers[qi] === oi}
                    onChange={() => handleAnswer(qi, oi)}
                  />{" "}
                  {opt}
                </label>
              ))}
            </div>
          ))}
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Submit Quiz
            </button>
          ) : (
            <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
              You scored {calculateScore()} out of {quizQuestions.length}!
            </p>
          )}
        </div>
      )}

      <footer
        style={{
          marginTop: "3rem",
          fontSize: "0.9rem",
          color: "gray",
          textAlign: "center",
        }}
      >
        <p>
          Made for an educational project about Chile’s copper mining industry
          by <strong>Enzo Browne</strong>.
        </p>
      </footer>
    </div>
  );
}
