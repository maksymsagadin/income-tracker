import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '$1000 ' : '$500 '}  
      in Category {isIncome ? 'Salary ' : 'Food '}
      for {isIncome ? 'Monday ' : 'Sunday '}
    </div>
  )
}

export default InfoCard