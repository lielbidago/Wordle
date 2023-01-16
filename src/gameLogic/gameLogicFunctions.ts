
export function getWord():string{
    
    return 'lemon';
}

export function isWord(word: string, wordEntered: string):boolean{
    return word===wordEntered;
}

export function checkWord(word: string, wordEntered: string):string[]{
    
    let wordColors = wordEntered.split("");
    wordColors= wordColors.map((l)=>(l+':'+'rgb(218 218 218 / 76%)'));
    
    wordColors.forEach((letterStatus:string, index:number)=>{
            
            const letter = letterStatus.slice(0,1);

            if(word.includes(letter)){
                
                if(word[index]===letter){
                    wordColors[index] = letterStatus.slice(0,2)+'rgb(18 226 198 / 76%)';
                }else{
                    wordColors[index] = letterStatus.slice(0,2)+'rgb(255 224 131 / 76%)';
                }
                
            }
 
        })
    
    return wordColors
}
