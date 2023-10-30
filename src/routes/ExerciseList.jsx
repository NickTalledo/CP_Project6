import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?type=${selectedType}&muscle=${selectedMuscle}&offset=${offset}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "/GiMu7YRmD6RnFWRCKIH2g==fbFbdd9N68seGvyP",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setExercises((prevExercises) => [...prevExercises, ...data]);
        } else {
          console.error("Error fetching exercises");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchExercises();
  }, [selectedType, selectedMuscle, offset]);

  const filteredExercises = exercises.filter(
    (exercise) =>
      (exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === "") &&
      (selectedType ? exercise.type === selectedType : true) &&
      (selectedMuscle ? exercise.muscle === selectedMuscle : true)
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Exercise List</h1>

      <Link to="/exercise/dash">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
          Go to Dashboard
        </button>
      </Link>

      {/* Exercise Type Dropdown */}
      <select
        className="border p-2 mb-4 rounded-lg"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="strongman">Strongman</option>
        <option value="strength">Strength</option>
        <option value="olympic_weightlifting">Olympic Weightlifting</option>
      </select>

      {/* Muscle Group Dropdown */}
      <select
        className="border p-2 mb-4 rounded-lg"
        value={selectedMuscle}
        onChange={(e) => setSelectedMuscle(e.target.value)}
      >
        <option value="">All Muscles</option>
        <option value="abdominals">Abdominals</option>
        <option value="abductors">Abductors</option>
        <option value="adductors">Adductors</option>
        <option value="biceps">Biceps</option>
        <option value="calves">Calves</option>
        <option value="chest">Chest</option>
        <option value="forearms">Forearms</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="lats">Lats</option>
        <option value="lower_back">Lower Back</option>
        <option value="middle_back">Middle Back</option>
        <option value="neck">Neck</option>
        <option value="quadriceps">Quadriceps</option>
        <option value="traps">Traps</option>
        <option value="triceps">Triceps</option>
      </select>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a workout..."
        className="border p-2 mb-4 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Exercise List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(
          ({ name, type, muscle, equipment, difficulty }, index) => (
            <li key={index} className="p-6 bg-white rounded-lg shadow-md">
              <Link to={`/exercise/${name}`}>
                <h2 className="text-xl font-bold mb-2">{name}</h2>
              </Link>
              <p>
                <span className="font-semibold">Type:</span> {type}
              </p>
              <p>
                <span className="font-semibold">Muscle:</span> {muscle}
              </p>
              <p>
                <span className="font-semibold">Equipment:</span> {equipment}
              </p>
              <p>
                <span className="font-semibold">Difficulty:</span> {difficulty}
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ExerciseList;
