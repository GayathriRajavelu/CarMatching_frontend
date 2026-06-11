import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuestionForm from "../components/QuestionForm";

function Home() {
    const navigate = useNavigate();

    const handleSubmit = (formData) => {
        navigate("/results", { state: formData });
    };

    return(
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
     <Navbar />
<div className="max-w-6xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h1 className="text-5xl font-bold mb-6">Find your Perfect Car</h1>
       <p className="text-lg text-gray-600 mb-6">Answer a few questions and get AI powered Recommendations tailored to your needs</p>
       <ul className="space-y-2 text-gray-700">
        <li>Personalized Recommendations</li>
        <li>side-by-side comparison</li>
        <li>Confidence Scores</li>
        <li>Smart Explanations</li>
       </ul>
        </div>
        <QuestionForm onSubmit={handleSubmit} />

    </div>
</div>
</div>
    );
}
export default Home;