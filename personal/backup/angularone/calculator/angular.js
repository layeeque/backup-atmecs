angular.module("calculatorApp", ["ngTagsInput"])

    .controller("CalculatorCtrl", function () {
        this.result = 0;
        this.resultcompute = function () {
            console.log("hi");
            if (this.selectedOperator === '+') {
                this.result = parseFloat(this.input1) + parseFloat(this.input2);
                console.log(this.result);
            }
            else if (this.selectedOperator === '-') {
                this.result = parseFloat(this.input1) - parseFloat(this.input2);
            }
            else if (this.selectedOperator === '*') {
                this.result = parseFloat(this.input1) * parseFloat(this.input2);
            }
            else if (this.selectedOperator === '/') {
                this.result = parseFloat(this.input1) / parseFloat(this.input2);
            }
        }
        this.BottonClicked = function (button) {

            this.selectedOperator = button;
        }
    })

    .controller("Moredirective", function () {
        this.myList = [
            { "name": "a1", "age": "21" }, { "name": "a2", "age": "22" }, { "name": "a3", "age": "23" }, { "name": "a4", "age": "24" }
        ];

    })

    .controller("Tagsdemoctrl",function(){
         this.tags=[{"text":"Tag1"},{"text":"Tag2"},{"text":"Tag3"}];
    });