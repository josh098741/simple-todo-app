import React,{useState} from 'react'

function Body(){

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleTasks = () => {
        const newTask = task
        setTasks([...tasks, newTask])
        setTask("")
    }

    return( 
        <div className="border m-5 h-[700px] p-5 rounded-md">
            <div className="flex gap-5">
                <input value={task} onChange={(event) => setTask(event.target.value)} className="border border-gray-800 w-[650px] h-10 rounded pl-3 outline-none" />
                <button onClick={handleTasks} className="border border-gray-800 h-10 w-20 rounded-md">Add Task</button>
            </div>
            <div className="border mt-5 h-[600px]">
                <div className=" bg-gradient-to-r from-blue-500 text-center border-b">
                    <h1 className="text-2xl">Tasks</h1>
                </div>
                <div>
                    <div className="flex flex-wrap">
                        {
                            tasks && tasks.length > 0 ? 
                            tasks.map((item,index) => (
                                <div>
                                    <div className="border inline-flex m-1 gap-3" key={index}>
                                        <span>{item}</span>
                                        <span>X</span>
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