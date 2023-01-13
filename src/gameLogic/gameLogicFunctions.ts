export function randomArrIndex(arrSize: number){
    return Math.floor(Math.random() * arrSize+1);
}

export function getWord(){
    
    const temp = ['lemon', 'apple', 'house'];
    
    return temp[randomArrIndex(temp.length)];
}

export function isWord(word: string, wordEntered: string){
    return word===wordEntered;
}

export function checkWord(word: string, wordEntered: string){
    
    let wordColors = wordEntered.split("");
    wordColors= wordColors.map((l)=>(l+':'+'grey'));
    
    wordColors.forEach((letterStatus, index)=>{
            
            const letter = letterStatus.slice(0,1);

            if(word.includes(letter)){
                
                if(word[index]===letter){
                    wordColors[index] = letterStatus.slice(0,2)+'green';
                }else{
                    wordColors[index] = letterStatus.slice(0,2)+'yellow';
                }
                
            }

            
        })
    
    return wordColors
}
