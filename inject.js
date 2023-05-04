let xhr = new XMLHttpRequest();
xhr.open("POST", "http://blog.99014fee-590.ctf.one.dr.punksecurity.cloud:5000/new-comment");


xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }};

let data = "name=panvaxss&comment=helloworld2112";

xhr.send(data);
