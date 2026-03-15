// pages/SearchResults.jsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      // Example: fetch results from your backend
      fetch(`/api/products/search?query=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error(err));
    }
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-white">
      <h2 className="text-2xl font-semibold mb-6">
        Search Results for: <span className="text-teal-400">{query}</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((item) => (
            <div
              key={item._id}
              className="bg-[#111] rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-teal-400 font-medium mt-1">₹{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
