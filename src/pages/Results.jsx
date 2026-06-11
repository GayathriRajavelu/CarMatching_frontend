import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecommendationCard from "../components/RecommendationCard";
import ComparisonTable from "../components/ComparisonTable";
import axios from "axios";
import { useEffect, useState } from "react";

function Results(){
    const{ state } = useLocation();

    const[cars,setCars] = useState([]);

    useEffect(()=>{
        axios
        .post(
            "http://localhost:5000/api/recommend",
            state
        )
        .then((res) =>{
            setCars(res.data.Recommendations);
        })
        .catch((err) =>{
            console.error(err);
        });
    },[]);

    return(
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 pu-10">
            <div className="mb-10">
                <h1 className="text-4xl font-bold">Your Top Car Matches</h1>
                <p className="text-gray-600 mt-2">Based on your preferences:
                    {" "}
                    {state?.priority}
                    </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {cars.map((car,index) =>(
                    <RecommendationCard
                    key={car.id}
                    car={car}
                    rank={index + 1}
                    />
                ))}
            </div>
            <ComparisonTable cars={cars}/>
        </div>
        </div>
  );
}
export default Results;