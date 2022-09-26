import logo from './logo.svg';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

function App() {

  const addGoalHandler = enteredText => {

  }

  return (
    <div>
      <CourseInput onAddGoal={addGoalHandler} />
    </div>
  );
}

export default App;
