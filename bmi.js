const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    const guide=document.querySelector('#guide')

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`<h2 style="color:red;">please enter a valid number</h2>`
    }else if (weight===''|| weight<0 || isNaN(weight)) {
        results.innerHTML=`<h2 style="color:red;">please enter a valid number</h2>`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)

        results.innerHTML=`<span style="color:red;font-size:24px;"> Your Body Mass Is <h4 style="color:green;">${bmi}</h4> </span>`
        
        if (bmi<18.6 ) {
            guide.innerHTML="Under Weight you must Eat helthy food"     
        }else if(bmi>18.6 && bmi<24.9){
            guide.innerHTML="Your health is good keep it up"
        }
        else if(bmi>24.9){
            guide.innerHTML="your weight is to Low or high please do some exercise and take healthy food "
        }
            
        
    }
  })

 
    // switch (guide) {
    //     case results<18.6:
    //         guide.innerHTML="sdsf"
    //         break;
    
    //     case results>18.6:
    //         guide.innerHTML="dsfs"
    //         break
    
    //     case results>24.9:
    //         guide.innerHTML="underweight"
    //         break
    
    //     default:
    //         break;
    // }

    
   
// })