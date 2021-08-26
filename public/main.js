let n=1
getPage.onclick =()=>{
  const request = new XMLHttpRequest()
  request.open('get',`page${n+1}`)
  request.onreadystatechange=()=>{
    if (request.readyState===4 ){
      if(request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response)
        array.forEach(item => {
          const li = document.createElement("li")
          li.textContent = item.id
          xxx.appendChild(li)
        })
        n += 1
      }else {
        alert('请求下一页不存在')
      }
    }
  }
  request.send()
}
getJSON.onclick = () =>{
  const request = new XMLHttpRequest()
  request.open('get','5.json')
  request.onreadystatechange = ()=>{
    if (request.readyState ===4){
      if(request.status >= 200 && request.status < 300){
        console.log(request.response)
        const Object = JSON.parse(request.response)
        console.log(Object)
        myName.textContent = '你好'+Object.name
      }else {
        alert('请求JSON不存在')
      }
    }
  }

  request.send()
}
getXML.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('get','3.xml')
  request.onreadystatechange = ()=> {
    if(request.readyState === 4){
      if (request.status >= 200 && request.readyState < 300){
        const dom =request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      }else {
        alert('请求XML不存在')
      }
    }
  }
  request.send()
}
getCSS.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('get','style.css')
  request.onreadystatechange=()=>{
    if (request.readyState===4){
      if (request.status>=200 && request.status<300){
        const style=document.createElement('style')
        style.innerHTML=request.response
        document.head.appendChild(style)
      }else {
        alert('请求HTML不存在')
      }
    }
  }
  request.send()
}
getJS.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open('get','1.js')
  request.onreadystatechange=()=>{
    if (request.readyState===4){
      if (request.status >=200 && request.status <300){
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      }else{
        alert('请求JS不存在')
      }
    }
  }
  request.send()
}
getHTML.onclick =()=>{
  const request = new XMLHttpRequest()
  request.open('get','2.html')
  request.onreadystatechange =()=>{
    if (request.readyState === 4){}
    if (request.status >=200 && request.status < 300){
      const div = document.createElement('div')
      div.innerHTML = request.response
      document.body.appendChild(div)
    }else{
      alert('请求CSS不存在')
    }
  }

  request.send()
}
