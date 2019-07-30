var ajax = new XMLHttpRequest()

ajax.open('GET','https://api.github.com/users/MurilloWolf')
ajax.send(null)

ajax.onreadystatechange = function () {
    if(ajax.readyState === 4 ){
        console.log(JSON.parse(ajax.responseText))

    }
}