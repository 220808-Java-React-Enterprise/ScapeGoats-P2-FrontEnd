
class Reading{
    private reading_id: string;
    private user_id: string;
    private card1: string;
    private card2: string;
    private card3: string;
    private description: string;
    private category: string;

    constructor(reading_id: string, user_id: string, card1: string, card2: string, card3: string, description: string, category: string) {
            
            this.reading_id = reading_id ;
            this.user_id = user_id ;
            this.card1 = card1 ;
            this.card2 = card2 ;
            this.card3 = card3 ;
            this.description = description ;
            this.category = category ;
   }
      
   public getReading_id() { return( this.reading_id ) }
   public getUser_id() { return( this.user_id ) } 
   public getCard1() { return( this.card1 ) }
   public getCard2() { return( this.card2 ) } 
   public getCard3() { return( this.card3 ) } 
   public getDescription() { return( this.description ) }
   public getCategory() { return( this.category ) } 

   
   public setReading_id( id: string ) { this.reading_id = id; }
   public setUser_id( id: string ) { this.user_id = id; } 
   public setCard1( card: string ) { this.card1 = card; }
   public setCard2( card: string ) { this.card2 = card; } 
   public setCard3( card: string ) { this.card3 = card; } 
   public setDescription( description: string ) { this.description = description; }
   public setCategory( category: string ) { this.category = category; } 

   
}

export default Reading;