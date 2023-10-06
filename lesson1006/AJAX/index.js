document.getElementById('fetch-posts').onclick = function() {
    var xhr = new XMLHttpRequest;
    var url = "https://reqres.in/api/login";

    var body = JSON.stringify({
        email: '',
        password: ''
    }) 
    sendRequest(url, 'POST', body)

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(JSON.parse(xhr.responseText));
            var posts = JSON.parse(xhr.responseText);
            var postListHTML = '';
            for (var post of posts) {
                postListHTML += '<p>' + post.id + '</p><p>' + post.title + '</p><small>' + post.body + '</small>';
            }
            document.getElementById('post-list-container').innerHTML = postListHTML;
        }
    }
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    xhr.send();
}