import { DataGrid } from "@mui/x-data-grid"

const MovieDataTable = ({data}) => {
    console.log(data)

    const columns = [
        {field: "rank", headerName: 'Rank', width: "100"}, 
        {field: "title", headerName: 'Title', width: "200"}, 
        {field: "genre", headerName: "Genre", width: "200"}, 
        {field: "rating", headerName: "Rating", width: "100"}, 
        {field: "description", headerName: "Description", width: "400"}, 
    ]

    return (
        <>
            <div style={{height: 400, width: "100%", background:"#fff"}}>
            <DataGrid sx={{fontSize:14}}
            rows={data}
            columns={columns}/>


        </div>
        
        </>
    )
}

export default MovieDataTable; 