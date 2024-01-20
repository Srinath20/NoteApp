const apiUrl = 'https://crudcrud.com/api/e57ccdd9e74949d38793096f279d1cb8/appointmentData';
let count = 0;
let search = 0;
// Function to fetch data using Axios
// const postData = async () => {
//     var title = document.getElementById('title').value;
//     var des = document.getElementById('des').value;
//   try {
//    await axios.post(apiUrl,{title:title,des:des})
// //    .then(function (response) {
// //         console.log(response.data);
// //         // var appointmentList = JSON.parse( axios.get(apiUrl)) || [];
// //         // appointmentList.push({title:title,des:des});
        

// //       })
// //       .catch(function (error) {
// //         console.error('Error adding appointment:', error);
// //       });

//   } catch (error) {
//     console.log('Error posting data:', error);
//   }
// };

const displayData = (appointmentList) => {
    const placeContainer = document.getElementById('place');
  
    // Clear existing content
    placeContainer.innerHTML = '';
  
    // Create HTML elements to display data
    const listContainer = document.createElement('ul');
  
    // Loop through the appointmentList and create list items
    appointmentList.forEach(appointment => {
      const listItem = document.createElement('li');
      listItem.textContent = `Title: ${appointment.username}, Description: ${appointment.email}`;
      listContainer.appendChild(listItem);
    });
  
    // Append the list to the place container
    placeContainer.appendChild(listContainer);
  };


function addAppointment() {
    var username = document.getElementById('title').value;
    var email = document.getElementById('des').value;
  
    if (username && email) {
      var appointmentData = { username: username, email: email };
      axios.post('https://crudcrud.com/api/e57ccdd9e74949d38793096f279d1cb8/appointmentData', appointmentData)
        .then(function (response) {
            axios.get('https://crudcrud.com/api/e57ccdd9e74949d38793096f279d1cb8/appointmentData')
            .then(function (response) {
              displayData(response.data);
            })
            .catch(function (error) {
              console.error('Error retrieving user details:', error);
            });
        })
        .catch(function (error) {
          console.error('Error adding appointment:', error);
        });
    }
  }

 document.addEventListener('DOMContentLoaded', function () {
    axios.get('https://crudcrud.com/api/e57ccdd9e74949d38793096f279d1cb8/appointmentData')
      .then(function (response) {
        count=response.data.length
        const countElement = document.getElementById('count');
        const searchElememt = document.getElementById('serach');
        if (countElement) {
          countElement.textContent = count;
          searchElememt.textContent = count;
        }
        displayData(response.data);
      })
      .catch(function (error) {
        console.error('Error retrieving user details:', error);
      });
  });


  document.addEventListener('DOMContentLoaded', function () {
    axios.get('https://crudcrud.com/api/e57ccdd9e74949d38793096f279d1cb8/appointmentData')
      .then(function (response) {
        count=response.data.length
        const countElement = document.getElementById('count');
        const serachElement = document.getElementById('count');
        if (countElement) {
          countElement.textContent = count;
        }
        displayData(response.data);
      })
      .catch(function (error) {
        console.error('Error retrieving user details:', error);
      });
  });
  
//   const notesInput = document.getElementById('notes');
//   notesInput.addEventListener('input', function(event) {
//     axios.get('https://crudcrud.com/api/e57ccdd9e74949d38793096f279d1cb8/appointmentData')
//     .then(function (response) {
//         let filter=[]
//       searchDataItems=response.data
//       console.log(searchDataItems)
     

    
//     //   const searchElememt = document.getElementById('serach');
//     //   if (searchElememt) {
   
//     //     searchElememt.textContent =filter.lengtht;
//     //   }
//     //   displayData(filter);
   
//     })
//     .catch(function (error) {
//       console.error('Error retrieving user details:', error);
//     });
 
//   });

//   const addButton = document.querySelector('button');
// addButton.addEventListener('click', addAppointment);
