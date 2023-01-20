
export function getWord():string{
    
    return 'lemon';
}

export function isWord(word: string, wordEntered: string):boolean{
    return word===wordEntered;
}

export function checkWord(word: string, wordEntered: string):string[]{
    
    let wordColors = wordEntered.split("");
    let wordStatus = ['grey','grey','grey','grey','grey'];
    
    wordStatus=wordColors.map((letter:string, index:number)=>{

            if(word.includes(letter)){
                
                if(word[index]===letter){
                    return 'green';
                }else{
                    return 'yellow';
                }
                
            }
            return 'grey'
 
        })
    
    return wordStatus
}
