let btn = document.getElementById('btn')
  let div = document.getElementById('grid-container')
  let apiUrl = 'https://reqres.in/api/users'
  btn.addEventListener('click',handlePromise)
  async function handlePromise(){
    let res = await fetch(apiUrl)
    let userData = (await res.json()).data
    getData(userData)
  }
 // method 1
  // let output = ''
  // function getData(userData){
  //   div.innerHTML = ""
  //   userData.forEach(ele => {
  //     console.log(ele)
  //     output += `
  //     <div class="grid-item">
  //       <img src="${ele.avatar}" alt="">
  //     <p>${ele.first_name} ${ele.last_name}</p>
  //     <p>${ele.email}</p>
  //   </div>
  //   `
  //   });
  //   div.innerHTML = output
  // }
  

 //mathod 2
 function getData(data){
  div.innerHTML = ""
  data.forEach(ele => {
    let gridItem = document.createElement('div')
    gridItem.className = 'grid-item'
    let imgTag = document.createElement('img')
    imgTag.src = ele.avatar
    let name = document.createElement('p')
    name.innerText = `${ele.first_name} ${ele.last_name}`
    let email = document.createElement('p')
    email.innerText = ele.email
    gridItem.append(imgTag,name,email)
    div.appendChild(gridItem)
  });
 }