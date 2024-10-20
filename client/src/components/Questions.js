import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const [showSteps, setShowSteps] = useState(false); // state for showing/hiding steps
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  }

  // Function to handle showing/hiding steps
  const handleShowSteps = () => {
    setShowSteps(!showSteps); // toggle visibility of steps
  };

  // Check if data is still loading or if there's an error
  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return (
      <h3 className="text-light">{serverError.message || "Unknown Error"}</h3>
    );

  // Add a check for `questions` and `questions.options` before rendering
  if (!questions || !questions.options) {
    return <h3 className="text-light">No questions available</h3>;
  }

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>

      {/* Button to show/hide steps */}
      <button onClick={handleShowSteps}>
        {showSteps ? "Hide Steps" : "Show Steps"}
      </button>

      {/* Conditionally display the steps */}
      {showSteps && (
        <div className="steps">
          <h3>Steps:</h3>
          <ol>
            {questions.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
