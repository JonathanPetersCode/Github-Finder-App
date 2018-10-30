class Github {
  constructor(){
    this.client_id = "361cd1a95fef0539a070";
    this.client_secret = "adce49cd88b4769d23b4b1b61d7cb4dd9413af4b";
    this.repos_count = 6;
    this.repos_sort = "created: asc";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    
    const repos = await repoResponse.json();
    
    return{
      profile,
      repos
    }
  }
}