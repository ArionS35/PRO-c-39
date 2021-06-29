class Player{

    constructor(){}


    getCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount=data.val()
        })
     }
 
 
 
     update( count){
        database.ref('/').update({
        playerCount:count
        })
     }
}