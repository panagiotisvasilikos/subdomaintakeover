fetch('http://blog.99014fee-590.ctf.one.dr.punksecurity.cloud:5000/new-comment', {method: 'POST', body:"name=panvaxss&comment=helloworld2112"}); 
const response = await fetch("http://blog.99014fee-590.ctf.one.dr.punksecurity.cloud:5000/new-comment", {
method: 'POST',
body: 'name=panvaxss&comment=helloworld',
});

response.json().then(data => {
  console.log(data);
});
