/* eslint-disable react/jsx-key */
import React from 'react'
import {useTable,Column,TableOptions} from 'react-table'

function TableHOC<T extends Object>(columns:Column<T>[],data:T[],containerClassName:string,heading:string) {

  return function HOC(){

    const options:TableOptions<T>={
        columns,data
    }

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=useTable(options)

    return <div className={containerClassName}>
        <h2 className='heading'>{heading}</h2>

        <table className='border-collapse w-full' {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(                 <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                        <th className='p-2 text-left align-middle font-bold text-gray-800 text-lg py-8 px-4' {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody className='first:pl-0 last:pr-0' {...getTableProps()}>
                {
                    rows.map((row)=>{
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
    </div>
  }
}

export default TableHOC