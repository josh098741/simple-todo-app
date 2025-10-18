import React,{useState} from 'react'
import { Trash2 } from 'lucide-react'

function Body(){

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleTasks = () => {
        const newTask = task
        if(newTask.trim() === "") return;
        setTasks([...tasks, newTask])
        setTask("")
    }

    const handleDeleteTask = (index) => {
        const updatedTask = tasks.filter((_,i) => i !== index)
        setTasks(updatedTask)
    }

    return( 
        <div className="border border-slate-500 m-5 h-[700px] p-5 rounded-md">
            <div className="flex gap-5">
                <input value={task} onChange={(event) => setTask(event.target.value)} className="border border-gray-800 w-[650px] h-10 rounded pl-3 outline-none" />
                <button onClick={handleTasks} className="border border-gray-800 h-10 w-20 rounded-md">Add Task</button>
            </div>
            <div className="border border-slate-500 rounded mt-5 h-[600px]">
                <div className=" bg-gradient-to-r from-blue-500 text-center border-b">
                    <h1 className="text-2xl text-white">Tasks</h1>
                </div>
                <div>
                    <div className="flex flex-wrap">
                        {
                            tasks && tasks.length > 0 ? 
                            tasks.map((item,index) => (
                                <div>
                                    <div className="border border-slate-700 rounded inline-flex m-1 gap-3 p-1" key={index}>
                                        <span>{item}</span>
                                        <span onClick={() => handleDeleteTask(index)}><Trash2 className="w-5" /></span>
                                    </div>
                                </div>
                            ))
                            : <div className="text-center text-3xl">No tasks</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body