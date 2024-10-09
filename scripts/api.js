export class Github {
    constructor() {
        this.client_id = "ac6586af7bc0155ab2b6";
        this.client_secret = "2602029d67d0ef51afe43ce634ed3a8f10e50226";
        this.per_page = 10;
        this.sort="asc"
    }
    /* apı'den kullanıcı bilgileri alma */
    async fetchUserData(username){
        /* parametre olarak gelen kullanıcı adına istek attık */
     const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`

     );

    
      /* kullanıcını repolarını almak için istek attık */
     const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
    );
   
    
    // api'den aldığımız yapıyı json 'a çevirdik
    const data = await profileRes.json();
    const repos= await repoRes.json();
    console.log(repos);

     /* fonksiyonun çağrıldığı yere bilgileri gönderme */
    return {data,repos} ;

   
}

}



