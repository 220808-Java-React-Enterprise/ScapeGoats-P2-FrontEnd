import { useEffect, useState } from 'react'
import InnerAxios from '../Utils/Config/InnerAxios'
import { Link } from "react-router-dom";


const ReadingHistory = () => {

  const [userId, setUserId] = useState("8dab77eb-2689-4b89-bc39-aa104095ec61");


  
  useEffect(() => {
    document.title = 'Reading History';
    loadReadings();

  }, [])

  const getUserId = (() => {
    let userId = localStorage?.user ?? "8dab77eb-2689-4b89-bc39-aa104095ec61";
    if( userId !== null && userId !== undefined) {
      return( userId )
    }
    else{
      console.error("404: userId not found in local storage.");
      return( "" )
      
    }
  })

  async function loadReadings() {
    //event.preventDefault();
    await InnerAxios.get('/readings/byid', {
      params: {
        userid: getUserId()
      }

    }).then(response => {
      console.log(response.data);

      setTable(response?.data);
      
    }).catch(error => {
      console.error(error)
      console.log(error?.response ?? "There is no message for this error.")
    })
  }

  let cName = 'cname';
  function setTable(readingArray: any){

      let readingTable = document.getElementById('Reading-Table-Body');

      if(readingTable != null) {
        //clearung the previous data in the table.
        readingTable.innerHTML = '';
        
        for(let i = 0; i < readingArray.length; i++) {
          let row = readingArray[i];
          let date = new Date(row?.date);
          let displayDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
          let category = row?.category_id ?? 'category';

          //Adding data to the table row by row.
          //removed due to time constraints  <th>Category</th>  +  '<td>' + category + '</td>'
          
          readingTable.innerHTML += '<tr>'
                                      + '<td>' + i + '</td>'
                                      +  '<td>' + displayDate + '</td>'
                                      + '<td>' + row?.card1 + '</td>'
                                      + '<td>' + row?.card2 + '</td>'
                                      + '<td>' + row?.card3 + '</td>'
                                      + '<td>' + row?.description + '</td>' + 
                                    '</tr>';
        }

      }

  }

  return (
  
    <>
    <div className='ReadingHistory-Div-Master'>
      <h1>Reality Escape Tarot</h1>
      <br/>
      {//Not implmented: Time constraints.
      //<input type='submit' value='Date' onClick={loadReadings}/>
      //<input type='submit' value='Category'/>
        }
      <h4>Reading History</h4>
      <table className='table table-striped thead-dark table-sm' id='Reading-Table' cellPadding={11} align='center'>
               
        <thead>
          
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>First Card</th>
            <th>Second Card</th>
            <th>Third Card</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody id='Reading-Table-Body'></tbody>
        <tfoot></tfoot>

      </table>
    </div>

    <Link to="/MainPage">Back to MainPage</Link>
    </>
    
  )
}

export default ReadingHistory