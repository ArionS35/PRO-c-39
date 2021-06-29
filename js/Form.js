class Form{

    constructor(){}

    
    display(){

        this.title= createElement('h2')
        this.title.html("CAR RACING GAME")
        this.title.position(150,100)

        this.input= createInput("name")
        this.input.position(120,250)

        this.button= createButton("play")
        this.button.position(120,280)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.greetings= createElement('h1')
            var name= this.input.value()
            this.greetings.html("hi  " + name)
            this.greetings.position(150,300)


        })
    }


}