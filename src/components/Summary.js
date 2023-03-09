import React from 'react'

function Summary({summary}) {
  return (
    <div>
    <br/>
    <h2>
      Summary
    </h2>
    {summary === '' ? <p></p> : <p>
        You will be carbon neutral by {summary.year} with {summary.trees} Trees planted, you estimated expenditure over {summary.years} year(s) is {summary.total}
      </p>}
    <br/>
    </div>
  )
}

export default Summary