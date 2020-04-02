//control the budget
var budgetController = (function() {})();




//control the UI
var UIController = (function() {})();





//trigger all actions
var trigger = (function(budgetCtrl, UICtrl) {

  var triggerCtrl = function() {
      
    // 1. Get the data from the input field.
    // 2. Add data to the budget controller.
    // 3. Add new item to the UI.
    // 4. Calculate the budget.
    // 5. Update the budget on UI

    console.log('Button Works');
  }
  
  document.querySelector(".add-btn").addEventListener("click",triggerCtrl);
  document.addEventListener('keypress',function(e){
      if(e.keyCode === 13 || e.which === 13){
          triggerCtrl();
      }
  })

})(budgetController, UIController);
