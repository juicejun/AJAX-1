// console.log('大家好，我是main.js')
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li) //li插入ul
                });
                n+=1
            }else{
                alert('加载页面失败')
            }
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = () => {
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = () => {
        // console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                // console.log(request.responseXML)
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('加载XML失败')
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 )
        if(request.status >= 200 && request.status <300){
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }else{
            alert('加载JSON失败')
        }
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/style.css') //readyState = 1
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                 // console.log(request.response)
                const style = document.createElement('style') //创建style标签
                style.innerHTML = request.response //填写style内容
                document.head.appendChild(style) //插到header里
            }else{
                alert('加载CSS失败')
            }
        }
    }  
    request.send() //readyState = 2
}
