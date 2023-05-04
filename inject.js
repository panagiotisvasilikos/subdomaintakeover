let formData = new FormData();
formData.append('name', 'JohnAdmin');
formData.append('comment', 'John123');

fetch("http://blog.99014fee-590.ctf.one.dr.punksecurity.cloud:5000/new-comment",
    {
        body: formData,
        method: "post"
    });
