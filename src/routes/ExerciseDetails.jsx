import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ExerciseDetails = () => {
  const { name } = useParams();

  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?name=${name}`,
          {
            headers: {
              "X-Api-Key": "/GiMu7YRmD6RnFWRCKIH2g==fbFbdd9N68seGvyP",
            },
          }
        );

        const data = await response.json();

        if (data.length === 0) {
          setExercise(null);
          return;
        }

        const [exercise] = data;
        setExercise(exercise);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseDetails();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          &lt; Back to Exercise List
        </Link>
        <h1 className="text-3xl font-semibold mb-4">{exercise.name}</h1>
        <p className="mb-2">
          <span className="font-semibold">Type:</span> {exercise.type}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Muscle:</span> {exercise.muscle}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Equipment:</span> {exercise.equipment}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Difficulty:</span>{" "}
          {exercise.difficulty}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Instructions:</span>{" "}
          {exercise.instructions}
        </p>
      </div>
    </div>
  );
};

export default ExerciseDetails;
