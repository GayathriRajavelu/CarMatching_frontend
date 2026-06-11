function RecommendationCard({ car,rank}) {
    return(
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-between items-center">
                <h2 className="text-xl font-bold">#{rank} {car.name}</h2>
                <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-sm font-semibold">
                    {car.score}%
                </span>
            </div>

            <div className="mt-4 space-y-2 text-gray-700">
                <p>Price:$ {car.price.toLocaleString()}</p>
                <p>Mileage: {car.mileage}km/l</p>
                <p>Safety: {car.safety}/5</p>
                <p>Seats: {car.seats}</p>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                    {car.reason}

                </p>
            </div>
            </div>
    
    );
}

export default RecommendationCard;