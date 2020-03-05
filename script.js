let John = {

    fullName: "John Spice",
    bills : [124,48,268,180,42],

    calculateTip : function(){
        this.tips = [];
        this.total = [];
               

        for(var i = 0; i<this.bills.length; i++ ){

            let percentage;
            let bill = this.bills[i];

            if(bill<50){
                percentage = 0.2;
            }else if(bill>=50 && bill<=200){
                percentage = 0.15
            }else{
                percentage = 0.1;
            }

            this.tips[i] = bill * percentage;
            this.total[i] = this.tips[i] + bill;
        }
      
    }

}

let Mark = {

    fullName: "Mark Parker",
    bills : [124,48,268,180,42],

    calculateTip : function(){
        this.tips = [];
        this.total = [];
               

        for(var i = 0; i<this.bills.length; i++ ){

            let percentage;
            let bill = this.bills[i];

            if(bill<50){
                percentage = 0.3;
            }else if(bill>=50 && bill<=200){
                percentage = 0.22
            }else{
                percentage = 0.19;
            }

            this.tips[i] = bill * percentage;
            this.total[i] = this.tips[i] + bill;
        }
      
    }

}

function averageTips(tipsArray){
    var sum=0;

    for(var i=0; i<tipsArray.length ; i++){
        sum += tipsArray[i];
    }

    return sum/tipsArray.length;

}

John.calculateTip();
console.log(John);
Mark.calculateTip();
console.log(Mark);
let averageJohn = (averageTips(John.tips));
let averageMark = (averageTips(Mark.tips));
if(averageJohn>averageMark)
    console.log("John paid the highest fee in tips with " + averageJohn + " in average");
    else if(averageMark>averageJohn)
    console.log("Mark paid the highest fee in tips with " + averageMark + " in average");
else
console.log("The average is equal in both cases");

    