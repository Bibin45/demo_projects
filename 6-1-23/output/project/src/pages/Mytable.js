import React from 'react'
import { useTable, useSortBy, useGlobalFilter,useBlockLayout,usePagination} from 'react-table'
import { GlobalFilter } from '../components/filter'
import {CSVLink} from 'react-csv';
export  const BasicReactTable=  ({data,columns})  =>{
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     prepareRow,
    //  exportData,
     state,       
    //  nextPage,
    //  previousPage,
    //  canNextPage,
    //  canPreviousPage, 
     page,
     setSortBy,  
    //  setPageSize,
    //  pageOptions,
     setGlobalFilter,
    //  gotoPage,    
    //  rows,
    //  footerGroups, 
        } = useTable({ data,columns},useGlobalFilter,useSortBy,useBlockLayout,usePagination)   
    const {globalFilter}=state

   return (
    <div className='container w-100 mt-3 text-secondary font'>
        {<CSVLink data={data} >
            <button style={{float:'right'}} className='btn btn-primary btn-sm rect_tablev7_export_button m-3 text-light '>
                <h6>Export To CSV File</h6>
            </button>
        </CSVLink>} 
     <div className='col-12'>{
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
     }</div>
     <div className={'react_table_v7  customer_list_reactTable border_bot  text-secondary    '}>        
            <table {...getTableProps()} className='w-100 table table-striped ' >
                <thead className='bg text-light'>
                    {headerGroups.map(headerGroup => (
                    <tr  className='no-margin no-padding w-100'  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th className='col'  
                            {...column.getHeaderProps(column.getSortByToggleProps())}                       
                             onClick={() => handleMultiSortBy(column, setSortBy)}
                          >
                            {column.render('Header')}
                            <span>
                                {column.isSorted ? (column.isSortedDesc ? " ⇑" : " ⇓") : " "}
                            </span>
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr className='row w-100 p-0 m-0' {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td className='col'{...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>   
     </div>
   )
 }
export const handleMultiSortBy = (column, setSortBy) => {
  const desc = column.isSortedDesc === true ? false: true;
  setSortBy([{ id: column.id, desc }]);
};