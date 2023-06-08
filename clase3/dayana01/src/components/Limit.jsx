const Limit = ({handleCount}) => {
    
    // Segunda manera. La primera es lo que está dentro del return.
    const handleKeyup = (event) => {
        const valueInput = parseInt (event.target.value);
        //Setear el valor para controlar los valores bajos.
        if(valueInput <= 0 || isNaN(valueInput)){
            handleCount(5);
        }else{
            handleCount(event.target.value);
        }
        
    }
    
    {/* Esta es la primera manera <input type="number" onKeyUp={
             (event) => {handleCount(event.target.value)
             }
         } />
         )*/}

    return (
        
         <input type="text" onKeyUp={handleKeyup} />
       )
     }
     

export default Limit