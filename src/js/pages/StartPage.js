import React from 'react'
//import _ from 'lodash'
//import namor from 'namor'

import ReactTable from 'react-table'

export default () => {
 /* const data = _.map(_.range(5553), d => {
    return {
      firstName: namor.generate({ words: 1, numLen: 0 }),
      lastName: namor.generate({ words: 1, numLen: 0 }),
      age: Math.floor(Math.random() * 30)
    }
  })*/
  const data = [
    {
      age:23,
        firstName:"flight",
      lastName:"watch1"
    },
    {
      age:24,
        firstName:"flight1",
      lastName:"watch2"
    },
    {
      age:25,
        firstName:"flight2",
      lastName:"watch3"
    },
    {
      age:26,
        firstName:"flight2",
      lastName:"watch4"
    }
  ]
  const columns = [{
    header: 'Name',
    columns: [{
      header: 'First Name',
      accessor: 'firstName'
    }, {
      header: 'Last Name',
      id: 'lastName',
      accessor: d => d.lastName
    }]
  }, {
    header: 'Info',
    columns: [{
      header: 'Age',
      accessor: 'age'
    }]
  }]

  return (
    <div>
      <div className='table-wrap'>
        <ReactTable
          className='-striped -highlight'
          data={data}
          columns={columns}
          defaultPageSize={10}
        />
      </div>
      <div style={{textAlign: 'center'}}>
        <br />
        <em>Tip: Hold shift when sorting to multi-sort!</em>
      </div>
    </div>
  )
}