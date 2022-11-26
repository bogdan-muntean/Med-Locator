import React from 'react'
import ResultDefault from './ResultDefault'
import ResultSearch from './ResultSearch'
import ResultPersonInfo from './ResultPersonInfo'

const ResultsContainer = () => {
  return (
    <>
      <div className='container-results'>
        <ResultDefault/>
      </div>
    </>
  )
}

export default ResultsContainer