import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [weight, setWeight] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()  // Fix: add parentheses here

        const workout = {title, weight, reps}
        const response = await fetch("/api/workouts", {  // Fix: add leading slash
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log("new workout added")
            setTitle("")
            setWeight("")
            setReps("")
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout!</h3>
            
            <label>Excercise Title: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Excercise Weight: </label>
            <input
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
            />

            <label>Excercise Reps: </label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm