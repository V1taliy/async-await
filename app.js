const fetch = require('node-fetch');

class DataService {
    constructor(url) {
        this.url = url;
    }
    async getUser(id) {
        try {
            let response = await fetch(`${this.url}/users/${id}`);
            let data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Ne ydalos polychit dannue ot servera');
        }
    }
    async getPosts(userId) {
        try {
            let response = await fetch(`${this.url}/posts?userId=${userId}`);
            let data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Ne ydalos polychit postu');
        }
    }
    async getComments(postId) {
        try {
            let response = await fetch(`${this.url}/comments?postId=${postId}`);
            let data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Ne ydalos polychit comentu');
        }
    }
}

(async () => {
    let dataService = new DataService('https://jsonplaceholder.typicode.com');
   try {
       let user = await dataService.getUser(1);
       let posts = await dataService.getPosts(user.id);
       let comments = await dataService.getComments(posts[0].id);
       console.log(posts);

   } catch (error) {
       console.error(error);
   }
})();
