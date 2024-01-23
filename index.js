let calculation = localStorage.getItem('calculation') || '';
    
    function updateCalculation(sum){
        calculation += sum;
        localStorage.setItem('calculation',calculation)

        displayCalculation();
        
        localStorage.setItem('calculation',calculation)    
    }

    function displayCalculation(){
        document.querySelector('.js-display-calculation')
            .innerHTML = calculation
            
    }