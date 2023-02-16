//  lessonl 7 

//   1 -----
const splitMessage =(message ,delimiter ) => arr  = message.split()
    console.log('splitMessage :>> ',  splitMessage('a love javascript' , ' '));
    
    // 2 -----------
    
const makeStringFromArray =(array ,delimiter ) => string  = array.join(delimiter) 
 console.log('makeStringFromArray :>> ', makeStringFromArray(['js' , 'is' , 'cool' , ] , ' '));

        
    
        // 3 ----------
    
        const checkFruit = (fruit) =>  {
            const arr = ['apple' , 'pear' , 'fig' , 'orange']
          const fruct =   arr.includes(fruit)
          return fruct
        }
console.log(' checkFruit :>> ',  checkFruit('apple'));


// lesson8 --------



// 4 --------

const  spliceArray = array =>  arr  = array.splice(2, 4)
    let array1 = spliceArray(["I", "study", "JavaScript", "right", "now"])
    console.log(array1)
    
    
    // 5 ------------
    
const sliceArray = array => arrSlice  = array.slice(0, 2)

        let array2 = sliceArray(["I", "study", "JavaScript", "right", "now"])
        console.log(array2)
        
    


    // lesson 12 -----

    const user  = {
        name: 'ivan',
        lastName: 'samusev',
        age: 16,
        location: {
            country: "Ukraine",
            city: 'Dnieper'
        }
    }
    
    const hello = user => {
    const {name ,
         lastName, 
         age, 
         location :{ country, city } } = user
    
         console.log('hello :>> ', `Вітаю ${name} ${lastName} , вам ${age} років? Ви проживаєте в місті ${city} в ${country}?`);
    }
    
    hello(user)
    
    