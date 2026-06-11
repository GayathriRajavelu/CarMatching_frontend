import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecommendationCard from "../components/RecommendationCard";
import ComparisonTable from "../components/ComparisonTable";

function Results() {
  const { state } = useLocation();

  const cars = [
    {
      id: 1,
      name: "Tata Nexon",
      price: 1200000,
      mileage: 18,
      safety: 5,
      seats: 5,
      score: 95,
      reason:
        "Excellent safety rating and ideal for families."
    },
    {
      id: 2,
      name: "Hyundai Venue",
      price: 1150000,
      mileage: 19,
      safety: 4,
      seats: 5,
      score: 89,
      reason:
        "Balanced package with good features and mileage."
    },
    {
      id: 3,
      name: "Maruti Brezza",
      price: 1100000,
      mileage: 20,
      safety: 4,
      seats: 5,
      score: 84,
      reason:
        "Great mileage and low maintenance cost."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Your Top Car Matches
          </h1>

          <p className="text-gray-600 mt-2">
            Based on your preferences:
            {" "}
            {state?.priority}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {cars.map((car, index) => (
            <RecommendationCard
              key={car.id}
              car={car}
              rank={index + 1}
            />
          ))}

        </div>

        <ComparisonTable cars={cars} />

      </div>
    </div>
  );
}

export default Results;