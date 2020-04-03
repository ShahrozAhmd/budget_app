//control the budget
var budgetController = (function () {

  //make constructors to create instances of 
  //all income and expense as objects

  function Expenses(id, desc, val) {
    this.id = id;
    this.desc = desc;
    this.val = val;
  }


  function Incomes(id, desc, val) {
    this.id = id;
    this.desc = desc;
    this.val = val;
  }

  //create a data structure to  hold all data 

  var data = {
    allIncExpe: {
      inc: [],
      exp: []
    },
    totals: {
      totalIncome: 0,
      totalExpense: 0
    }

  };


})();



//control the UI
var UIController = (function () {
  var getDataClasses = {
    type: ".select-box",
    description: ".des-box",
    value: ".value-box",
    addBtn: ".add-btn"
  };

  return {
    //getting data of all fields in object properties
    inputData: function () {
      return {
        type: document.querySelector(getDataClasses.type).value,
        description: document.querySelector(getDataClasses.description).value,
        value: document.querySelector(getDataClasses.value).value
      };
    },
    dataClasses: function () {
      return getDataClasses;
    }
  };
})();

//trigger all actions
var trigger = (function (budgetCtrl, UICtrl) {

  var eventHandler = function () {
    console.log('Appication has started');
    //store the passed data of class names of UI elements
    var dataCl = UICtrl.dataClasses();

    document.querySelector(dataCl.addBtn)
      .addEventListener("click", triggerCtrl);

    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        triggerCtrl();
      }
    });
  };



  var triggerCtrl = function () {

    // 1. Get the data from the input field.
    var inputValues = UICtrl.inputData();
    // 2. Add data to the budget controller.
    // 3. Add new item to the UI.
    // 4. Calculate the budget.
    // 5. Update the budget on UI
  };

  return {
    init: function () {
      eventHandler();
    }
  }

})(budgetController, UIController);

trigger.init();