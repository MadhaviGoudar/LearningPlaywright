//Count vowels and consonants in a String

let str="MadhaviGoudar"
let Vcount=0;
let Ocount=0;
str = str.toLowerCase();
for(let i=0; i<str.length; i++){
    let char=str[i];
    if(char>='a' && char<='z')
    {
         if ("aeiou".includes(char))
        {
         Vcount++;
        } else{
            Ocount++;
        }
    }
}
console.log("Vowels", Vcount);
console.log("Consonants",Ocount);