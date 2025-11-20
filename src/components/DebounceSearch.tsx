

import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearch() {
  const [delay, setDelay] = useState(500);
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const { debouncedValue } = useDebounce(inputValue, delay);
  useEffect(() => {
    setLoading(true);
    const timeId = setTimeout(() => {
      if (!debouncedValue) {
        setSearchResult([]);
      } else {
        const result = [];
        for (let i = 0; i < 3; i++) {
          result.push(`Result for "${debouncedValue}": item ${i + 1}`);
        }
        setSearchResult(result);
      }
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [debouncedValue]);

  return (
    <div className="mx-3">
      <h2 className="text-2xl font-bold text-center mb-5">
        Debounce Search Demo
      </h2>
      <label htmlFor="delay">Debounce Delay (ms): </label>
      <input
        id="delay"
        className="text-center w-25"
        type="number"
        value={delay}
        step="100"
        min="0"
        onChange={(event) => setDelay(Number(event.target.value))}
      />
      <br />
      <input
        className="border my-3 p-1 w-100"
        id='current-value'
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Type to Search..."
      />
      <p>
        <span className="font-semibold">Current Input: </span>
        {inputValue}
      </p>
      <p>
        <span className="font-semibold">
          Debounced Value (after {delay}ms):{" "}
        </span>
        {debouncedValue}
      </p>
      <br />
      {loading ? <h3>Searching...</h3> : <h3>Simulated Search Result:</h3>}
      {searchResult.length === 0 ? (
        <p>Type to see results.</p>
      ) : (
        <ul>
          {searchResult.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DebounceSearch;