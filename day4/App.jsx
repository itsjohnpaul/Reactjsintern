import './App.css';
import "./TaskList.css";
function App() {

  const tasks = [
    {
      id: 1,
      task: "learing java",
      description: "Learning basic concepts and oops in java",
      completed: true,
    },
    {
      id: 2,
      task: "learing reactjs",
      description: "Learning basic concepts of reactjs props,states,and hooks in react",
      completed: false,
    },
    {
      id: 3,
      task: "learing tailwindcss",
      description: "Learning basic style componants in tailwind like flex,grid,colors",
      completed: false,
    },
    {
      id: 4,
      task: "learing sql",
      description: "Learning sql concepts like DML ,DDL Commands",
      completed: false,
    }


  ];
  return (
    <>
    <center><h1>TASK LIST 📝</h1>
    </center>
      <div className="task">
        {tasks.map((tas) => (
          <div className={tas.completed ? "com":"notcom"}>
            <h3>{tas.task}</h3>
            <p>{tas.description}</p>
            <p><b>Status:</b>  
                    {tas.completed ? "completed ✅" : "Notcompleted ❌"}</p>
            <p><b>Name:</b>JOHNPAUL P</p>
          </div>

        ))}
      </div>
    </>
  );
}

export default App;
