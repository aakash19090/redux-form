import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from '../columns'
import '../table.css'
import downArrow from '../../Images/caret-down.svg'
import upArrow from '../../Images/caret-up.svg'
import MainFilter from './Filter'

const FilterTable = () => {

    const columns = useMemo( () => GROUPED_COLUMNS, [])
    const data = useMemo( () => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy )

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance;

    const { globalFilter } = state

    return (
        <div className="table_data m-5">
            <div className="container">
                <div className="table_wrap mx-auto w-100">

                    <MainFilter filter={ globalFilter } setFilter={ setGlobalFilter } />

                    <table {...getTableProps()}>

                        {/* Table Header */}
                        <thead>
                            {
                                headerGroups.map( headerGroup => (
                                    
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map( column => (
                                                <th {...column.getHeaderProps(column.getSortByToggleProps())}> { column.render('Header') } 
                                                
                                                    <span className="sort_icon">
                                                        {column.isSorted ? ( column.isSortedDesc ? (
                                                            <img src={downArrow} alt="downarrow"/>
                                                        ): (
                                                            <img src={upArrow} alt="uparrow"/>
                                                        ) ) : '' }
                                                    </span>
                                                </th>
                                            ) )
                                        }
                                    </tr>
                                ))
                            }
                        </thead>
                        
                        {/* Table Body */}
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

                        {/* Table Footer */}
                        
                        <tfoot>
                            {
                                footerGroups.map( footerGroup => (
                                    <tr {...footerGroup.getFooterGroupProps()}>
                                        {
                                            footerGroup.headers.map(column => (
                                                <td {...column.getFooterProps()}>
                                                    { column.render('Footer') }
                                                </td>
                                            ))
                                        }

                                    </tr>
                                ) )
                            }
                        </tfoot>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default FilterTable
