import { useState} from "react";
function QuestionForm({ onSubmit }) {
    const [form, setForm] = useState({
        budget: "",
        fuel:"Petrol",
        familySize:"4",
        usage:"City",
        priority:"Safety",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">
                Tell us about your needs
            </h2>
            <div className="space-y-4">
                <input
                type="number"
                name="budget"
                placeholder="Budget($)"
                className="w-full border p-3 rounded-lg"
                value={form.budget}
                onChange={handleChange}
                />
                <select
                name="fuel"
                className="w-full border p-3 rounded-lg"
                value={form.fuel}
                onChange={handleChange}
                >
                    <option >Petrol</option>
                    <option >Diesel</option>
                    <option>EV</option>
                </select>

                <select
                name="familySize"
                className="w-full border p-3 rounded-lg"
                value={form.familySize}
                onChange={handleChange}
                >
                    <option value="2">2 Members</option>
                    <option value="4">4 Members</option>
                    <option value="6">6 Members</option>
                </select>

                <select
                name="usage"
                className="w-full border p-3 rounded-lg"
                value={form.usage}
                onChange={handleChange}

                >
                    <option>City</option>
                    <option>Highway</option>
                    <option>Mixed</option>
                </select>
                <select
                name="priority"
                className="w-full border p-3 rounded-lg"
                value={form.priority}
                onChange={handleChange}
                >
                    <option >Safety</option>
                    <option >Mileage</option>
                    <option >Performance</option>
                    <option> Features</option>
                </select>
                <button
                onClick={()=> onSubmit(form)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                    Get Recommendations</button>
                    </div></div>
                );
                }
export default QuestionForm;