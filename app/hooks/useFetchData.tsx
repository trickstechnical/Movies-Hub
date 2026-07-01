"use client";

import { useEffect, useState } from "react";
import { MovieResponse, MovieSuccessResponse } from "@/types/MovieData";

const useFetchData = (id: string) => {
  const [data, setData] = useState<MovieSuccessResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}`
        );

        if (!res.ok) {
          setError("Something went wrong. Please try again.");
          return;
        }

        const result: MovieResponse = await res.json();

        if (result.Response === "False") {
          setError(result.Error);
          return;
        }

        setData(result);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, error, loading };
};

export default useFetchData;
