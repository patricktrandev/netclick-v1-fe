import { useEffect, useState } from "react";

const defaultHeader = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

export default function useFetch(
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true },
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
      method: method,
      headers: { ...defaultHeader, ...headers },
    })
      .then(async (res) => {
        const data = await res.json();
        //console.log(data.results);
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [url, method, JSON.stringify(headers), enabled]);

  return { isLoading, data };
}
