//control the budget
var budgetController = (function () {

  /*make constructors to create instances of 
  all income and expense as objects*/

  //expenses constructor
  function Expenses(id, description, value) {
    this.id = id;
    this.desc = description;
    this.val = value;
  }


  //ncomes constructor
  function Incomes(id, description, value) {
    this.id = id;
    this.desc = description;
    this.val = value;
  }



  //create a data structure to  hold all data 
  var data = {
    allIncExp: {
      inc: [],
      exp: []
    },
    totals: {
      totalIncome: 0,
      totalExpense: 0
    }
  };


  return {
    generateItem: function (type, desc, val) {

      var addItem, ID; //id would be last element + 1

      if (data.allIncExp[type].length > 0) {
        ID = data.allIncExp[type][data.allIncExp[type].length - 1].id + 1;
      } else {
        ID = 0;

      }


      if (type === 'inc') {

        addItem = new Incomes(ID, desc, val)

      } else if (type === 'exp') {

        addItem = new Expenses(ID, desc, val);
      }

      data.allIncExp[type].push(addItem);
      return addItem;

    },

    // test: function () {
    //   return data;
    // }
  }
})();



//control the UI
var UIController = (function () {

  var getDataClasses = {
    type: ".select-box",
    description: ".des-box",
    value: ".value-box",
    addBtn: ".add-btn",
    incomeContainer: '.income-container',
    expenseContainer: '.expense-container',
  };

  return {
    //getting data of all fields in object properties
    inputData: function () {
      return {
        type: document.querySelector(getDataClasses.type).value,
        description: document.querySelector(getDataClasses.description).value,
        value: parseFloat(document.querySelector(getDataClasses.value).value)
      }; //make public methods to use in other modules

    },
    dataClasses: function () {
      return getDataClasses;
    },
    addListItems: function (obj, type) {

      var html, htmlElement;
      if (type === 'inc') {
        htmlElement = getDataClasses.incomeContainer;
        html =
          `<div class="ie-bar magictime boingInUp" id = "income-${obj.id}">
        <span class="ie-sno">${obj.id}. </span>
        <h3 class="ie-bar-des">${obj.desc}</h3>
        <h4 class="ie-value">${obj.val}</h4>
        <span class="ie-cross-btn"><i class="fa fa-times-circle" style="padding: 2px;"></i></span>
        </div>`;

      } else if (type === 'exp') {
        htmlElement = getDataClasses.expenseContainer;
        html =
          `<div class="ie-bar magictime boingInUp expense-only id="expense-${obj.id}">
            <span class="ie-sno">${obj.id}. </span>
            <h3 class="ie-bar-des">${obj.desc}</h3>
            <span class="small-percentage-show">20%</span>
            <h4 class="ie-value">${obj.val}</h4>
            <span class="ie-cross-btn"><i class="fa fa-times-circle" style="padding: 2px;"></i></span>
          </div>`;
      }
      document.querySelector(htmlElement).insertAdjacentHTML('beforeend', html);

      //clear the input fields:
      var fieldData = document.querySelectorAll(`${getDataClasses.description},${getDataClasses.value}`);

      fieldData.forEach(element => {
        element.value = '';
      });
      fieldData[0].focus();
    }
  };
})();


//trigger all actions
var trigger = (function (budgetCtrl, UICtrl) {

  var eventHandler = function () {

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

  function updateBudget() {
    // 1. Calculate the budget.
    // 2. Return the budget
    // 3. Update the budget in UI
  }



  var triggerCtrl = function () {



    // 1. Get the data from the input field.
    var inputValues = UICtrl.inputData();
    if (inputValues.description != "" && !isNaN(inputValues.value) && inputValues.value > 0) {
      // 2. Add data to the budget controller.
      var newItem = budgetCtrl.
      generateItem(inputValues.type, inputValues.description, inputValues.value);
      // 3. Add new item to the UI.
      UICtrl.addListItems(newItem, inputValues.type);
      //4. Update the budget
      updateBudget();
    }
  };

  return {
    init: function () {
      eventHandler();
    }
  }

})(budgetController, UIController);

//to initialize our application.
trigger.init();