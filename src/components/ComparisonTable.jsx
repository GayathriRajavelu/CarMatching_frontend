function ComparisonTable({ cars }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
            <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold">Compare Recommendations</h2>
            </div>
            <table className="w-full">
        <thead>
        <tr className="bg-gray-500">
            <th className="text-left p-4">Feature</th>
            {cars.map((car)=>(
                <th key={car.id} className="p-4">{car.name}</th>
            ))}
        </tr>
        </thead>
        <tbody>
        <tr className="border-t"> 
            <td className="p-4 font-medium">Price</td>
            {cars.map((car)=>(
                <td key={car.id} className="p-4">${car.price.toLocaleString()}</td>
            ))}
        </tr>
        
        <tr className="border-t">
            <td className="p-4 font-medium">Mileage</td>
            {cars.map((car)=>(
                <td key={car.id} className="p-4">{car.mileage} </td>))}

        </tr>
        <tr className="border-t">
            <td className="p-4 font-medium">Safety</td>
            {cars.map((car)=>(
                <td key={car.id} className="p-4">{car.safety}/5</td>
            ))}
        </tr>
        </tbody>
        </table>
      </div>
        );
}
export default ComparisonTable;