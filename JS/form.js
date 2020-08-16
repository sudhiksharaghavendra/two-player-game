class Form {
constructor(){

}
display(){
    var namebox=createInput("name")
    namebox.position(600,200)
    var button=createButton("play")
    button.position(650,250)
    button.mousePressed(function(){
        namebox.hide()
        button.hide()
        var greeting=createElement("h2")
        var name=namebox.value()
        greeting.html("Hi "+name)
        greeting.position(700,300)
        playerCount++
        player.updateCount(playerCount)
        player.update(name)
    })

}
}