import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link to={'/insert-image'}>
        <Card title="Insert External Image">
          Create an Image Block with external src other than "file upload" and "unsplash" supported by craft by default.
        </Card>
      </Link>
    </div>
  )
}

export default Home
