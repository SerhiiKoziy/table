import React from 'react'
import ReactTable from 'react-table'

export default () => {

  const data = [
    {
      age:45,
        firstName:"flight",
      lastName:"watch1"
    },
    {
      age:31,
        firstName:"flight1",
      lastName:"watch2"
    },
    {
      age:18,
        firstName:"flight2",
      lastName:"watch3"
    },
    {
      age:21,
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
  }];

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