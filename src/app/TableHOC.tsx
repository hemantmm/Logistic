/* eslint-disable react/jsx-key */
import React from 'react'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import {useTable,Column,TableOptions, useSortBy, usePagination} from 'react-table'

function TableHOC<T extends Object>(columns:Column<T>[],data:T[],containerClassName:string,heading:string, showPagination:boolean=false) {

  return function HOC(){

    const options:TableOptions<T>={
        columns,data,
        initialState:{
            pageSize:6,
        }
    }

    const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,nextPage,previousPage,canNextPage,canPreviousPage,pageCount,state:{pageIndex}}=useTable(options,useSortBy, usePagination)


    return <div className={containerClassName}>
        <h2 className='heading'>{heading}</h2>

        <table className='border-collapse w-70vw' {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(                 
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                        <th className='p-2 text-left align-middle font-bold text-gray-800 text-lg py-8 px-4' {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render("Header")}
                            {
                                column.isSorted &&(
                                    <span className='absolute top-24'>
                                {column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}
                                </span>
                                )
                            }
                        </th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody className='first:pl-0 last:pr-0' {...getTableProps()}>
                {
                    page.map((row)=>{
                        prepareRow(row)
                        return <tr className='shadow-lg' {...row.getRowProps()}>
                            {
                                row.cells.map((cell)=>(
                                    <td className='p-4' {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>

        {
            showPagination && (
            <div className='flex flex-row justify-center items-center gap-4 p-8'>
                <button className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:opacity-80 disabled:opacity-50' disabled={!canPreviousPage} onClick={previousPage}>prev</button>
                <span className='px-2 mt-2'>{`${pageIndex+1} of ${pageCount}`}</span>
                <button className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:opacity-80 disabled:opacity-50' disabled={!canNextPage} onClick={nextPage}>next</button>
            </div>)
        }
    </div>
  }
}

export default TableHOC