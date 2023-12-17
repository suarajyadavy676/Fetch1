let userName = document.getElementById('user-name')
  let userAge = document.getElementById('user-age')
  function store(){
    localStorage.setItem("Name",userName.value)
    localStorage.setItem("Age",userAge.value)
    userName.value = ""
    userAge.value = ""
  }
  let data = ''
  function retrieve(){
    if(localStorage.getItem("Name")==null && localStorage.getItem("Age")==null){
      alert("Please inter user Name and Age")
      return
    }
    data += `
    <table>
      <tr>
        <td class = "table-data">${localStorage.getItem('Name')}</td>
        <td class = "table-data">${localStorage.getItem('Age')}</td>
      </tr>
    </table>
    `
    document.getElementById('retrieve').innerHTML = data
    localStorage.clear()
  }