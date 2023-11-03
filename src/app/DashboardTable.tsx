import { Column } from "react-table"
import TableHOC from "./TableHOC"

interface DataType{
    id:string
    quantity:number
    discount:number
    amount:number
    status:string
}

const columns:Column<DataType>[]=[
    {
    Header:"Id",accessor:"id",
    },
    {
        Header:"Quantity",accessor:"quantity",
    },
    {
        Header:"Discount",accessor:"discount",
    },
    {
        Header:"Amount",accessor:"amount",
    },
    {
        Header:"Status",accessor:"status",
    },
]

function DashboardTable({data=[]}:{data:DataType[]}) {

  return (
      TableHOC<string>(columns,data,"transactioBox","Top Transaction")()
    
  )
}

export default DashboardTable