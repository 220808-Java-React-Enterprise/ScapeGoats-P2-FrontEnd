

class User {
    private id: string;
    private username: string;
    private role: string;

    constructor(id: string, username: string, role: string) {
        this.id = id;
        this.username = username;
        this.role = role;

    }
    
   public getId() { return(this.id) }
   public getUsername() { return(this.username) }
   public getRole() { return(this.role) }

}
export default User;