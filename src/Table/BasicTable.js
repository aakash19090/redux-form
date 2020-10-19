import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

const BasicTable = () => {

    const columns = useMemo( () => COLUMNS, [])
    const data = useMemo( () => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    console.log(tableInstance)
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <div className="table_data m-5">
            <div className="container">
                <div className="table_wrap mx-auto w-100">

                    <table {...getTableProps()}>
                        <thead>
                            {
                                headerGroups.map( headerGroup => (
                                    
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map( column => (
                                                <th {...column.getHeaderProps()}> { column.render('Header') } </th>
                                            ) )
                                        }
                                    </tr>
                                ))
                            }
                        </thead>

                        <tbody {...getTableBodyProps()}>

                            {
                                rows.map( row => {
                                    prepareRow(row);

                                    return (
                                        <tr {...row.getRowProps()}>
                                            {
                                                row.cells.map( cell => (
                                                    <td {...cell.getCellProps()}> { cell.render('Cell') } </td>
                                                ))
                                            }
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default BasicTable
