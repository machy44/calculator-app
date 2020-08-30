import { useState } from "react";

const URL = "https://api.mathjs.org/v4/";

const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify()
};

const replaceSymbolsInQuery = (query) => {
  return query.replace(/\+/g, "%2B").replace(/\//g, "%2F");
};

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (query) => {
    let preparedQuery = replaceSymbolsInQuery(query);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}?expr=${preparedQuery}`, config);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError("Malformed expression");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  };

  return { response, setResponse, error, setError, isLoading, handleSubmit };
};

export default useFetch;
