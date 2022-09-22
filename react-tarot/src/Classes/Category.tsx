

//CATEGORY class
class Category {
    private id: string;
    private name: string;
    private meanings: string[];

    constructor(id: string, name: string, meanings: string[]) {
        this.id = id;
        this.name = name;
        this.meanings = meanings;
    }

    public getId() { return(this.id) }
    public getName() { return(this.name) }
    public getMeanings() { return(this.meanings) }

}


export default Category;
