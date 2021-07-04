const window_game= document.querySelector('.game-container')
let RandomPictures=[]
let PairingTable=[]
let count=0
let score=0
class game{
    CreateCards(){
        this.PushArray()
        for(let i=0;i<12;i++){
        this.create_card=document.createElement('button')
        window_game.appendChild(this.create_card)  
        this.create_card.classList="card"
        this.create_card.id=RandomPictures[i]
        }
        this.Check()
        this.Refresh()
        }
    PushArray(){
        let z=12
        for(let i=0;i<z;i++){
            if(RandomPictures.length!=12){
                z++
            }
                let random_number=Math.floor((Math.random() * 6)+1)
                if (RandomPictures.includes(random_number)){
                    continue
                }else{
                    RandomPictures.push(random_number,random_number)
                }
            }
            this.ShuffleArray()
    }

    ShuffleArray(){
        let list = RandomPictures.sort(() => Math.random() - 0.5)
    }

    Hide(idValue){
        if (idValue.classList.contains("Activate") || idValue.classList.contains("DeActivate")){
            idValue.style.backgroundImage = "url('graph/" +idValue.id + ".jpg')"
        }
    }

    Check(){
        const cards=document.querySelectorAll('.card')
        cards.forEach((c)=>{
            c.addEventListener('click', ()=>{
                c.classList.add("Activate")
                
                this.Hide(c)
                if(c.classList.contains("Activate")){
                const Clicked_Pictures=document.querySelectorAll('.Activate')
        
                if(PairingTable.includes(c.id)){
                            Clicked_Pictures.forEach((z)=>{
                                z.disabled = true
                                z.classList.add('DeActivate')
                                score++
                                if (score>=cards.length){
                                    alert("You win")
                                }
                            })                        
                }else{
                    PairingTable.push(c.id)
                    c.disabled=true
                }
            
                }
                count++
                if(count>1){
                    cards.forEach((z)=>{
                        z.classList.remove("Activate")
                        PairingTable=[]
                        z.disabled=true
                        setTimeout(()=>{
                            z.style.backgroundImage="url('graph/q1.jpg')" 
                            z.disabled=false 
                        },1000)
                    })
                        count=0
                    }
            })
            
            })
            
        }

    }

let x=new game
x.CreateCards()
