import React, { useState } from 'react';
import { PiArrowSquareLeftFill } from "react-icons/pi";
import { PiArrowSquareRightFill } from "react-icons/pi";
import './index.css'

const MyTableComponent = (props) => {
    const {month,monthData} = props 
    console.log(monthData)
    const itemsPerPage = 5
    const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = monthData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(monthData.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
   
   
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        
          
            {currentItems.map(each=>
            <tr key={each.id}>
              <td>{each.id}</td>
              <td>{each.title}</td>
              <td>{each.description}</td>
              <td>{each.price}</td>
              <td>{each.category}</td>
              <td>{each.sold}</td>
              </tr> 
            )}
         
        
      </tbody>
    </table>
    <div className='btn-con'>
    <p className='icon'>{`Page ${currentPage} of ${totalPages}`}</p>
    <button  className='prev-next-btn' onClick={handlePrevClick} disabled={currentPage === 1}>
    <PiArrowSquareLeftFill className='icon' />  Prev
    </button>
    
    <button className='prev-next-btn ' onClick={handleNextClick} disabled={currentPage === totalPages}>
      Next <PiArrowSquareRightFill className='icon' />
    </button>
    <p className='icon'>Per Page 5</p>
  </div>
  </>
  );
};
 
export default MyTableComponent;
