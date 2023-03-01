import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const URL = "https://course-api.com/react-tours-project"

function App() {
  // 1. State Values
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  // 2. Fetching the data
  const fetchTours = async () => {
    setLoading(true)
    try {
      const res = await fetch(URL)
      const data = await res.json()
      setTours(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  // 3. Removeing the tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  // 4. Displaying The UI
  if (loading) {
    return (
      <Loading />
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
