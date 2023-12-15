import './index.css'

const Statistics = (props) => {
    const {monthData,month} = props
    return (
        <div className='stats-con'> 
        <h1 className='stats-head'>Statistics: {month}<span className='month-dis'>(Select month name from dropdown)</span></h1>
        <p>Total Sale <span className='span-item'>{monthData.totalSaleAmount}</span> </p>
        <p>Total Sold Items <span className='span-item'>{monthData.totalSoldItems}</span></p>
        <p>Total Not Sold Items <span className='span-item'>{monthData.totalNotSoldItems}</span></p>  
        </div>
    )
}
export default Statistics