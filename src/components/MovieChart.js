import 'chart.js/auto';
import { Scatter } from "react-chartjs-2" 

const MovieChart = ({data}) => {

    const chartData = {
        // set expenseCategories as labels
        labels: data.map((data) => data.rank),
        datasets: [{
          label: 'Movie IMDB Ratings by Rank',
          // set amountSpent per expenseCategory as data
          data:data.map((data) => data.rating),
          backgroundColor: [
            'rgba(28, 208, 187, 0.39)',
            'rgba(255, 164, 0, 0.5)',
            'rgba(0, 169, 215, 0.5)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            '#12C1AC',
            '#F19E09',
            '#0496D2',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
          hoverOffset: 4
        }]
      };

    return (
        <>
             <Scatter data={chartData}/>
        
        </>
    )
}

export default MovieChart