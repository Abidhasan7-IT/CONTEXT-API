import "./App.css";
import StudentForm from "./component/StudentForm";
import StudentSection from "./component/StudentSection";

const App = () => {
	return (
		<div className="App">
			<StudentForm />
			<StudentSection />
		</div>
	);
};

export default App;