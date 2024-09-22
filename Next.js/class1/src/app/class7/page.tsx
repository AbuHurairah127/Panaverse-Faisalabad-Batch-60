import React from 'react'
import Button from '../components/common/button/Button'

const page = () => {
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium harum beatae delectus atque, libero autem, culpa quasi hic sequi inventore eveniet voluptate natus laudantium laboriosam enim ipsa? Inventore, natus?</p>
        <Button title="Register" theme='dark' newClasses='bg-red-500' />
        <Button title="Login" theme='light' newClasses='bg-yellow-500' />
        <Button title="Register" theme='dark' newClasses='' />
        <Button title="Login" theme='light' newClasses='' />
    </div>
  )
}

export default page