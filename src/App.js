import React, { useState, useEffect } from 'react'
import Loading from "./Loading"
import Tours from "./Tours"


const url = "https://course-api.com/react-tours-project"


const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    }
    catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  
  const removeTour = (id) => {
    const newTours = tours.filter(tour => (tour.id !== id))
    return setTours(newTours)
  }
  
  useEffect(() => {
    fetchTours()
  }, [])

  if(isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <h1 className="no-tours">No Tours Left</h1>
        <button className="refresh-button" onClick={fetchTours}>Refresh</button>
      </main>
    )
  }

  return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
  )

}


export default App
