import React from 'react'
import { Books } from './Book'

interface Prop{
  books:Books[]
}

const ViewDetails = ({books}:Prop) => {
  return (
    <div className='view-container'>
      <table>
        <thead>
          <tr>
            <td>Title:</td>
            <td>Author:</td>
            <td>Price:</td>
          </tr>
        </thead>
        <tbody>
          {books.map((item:{title:string, author:string, price:string}) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewDetails
