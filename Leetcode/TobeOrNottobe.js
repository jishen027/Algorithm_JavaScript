// To be or not to be
// run execpt(1).ToBe(1) will return true
// run execpt(1).ToBe(2) will return false
// run except(1).NotToBe(2) will return true

var execpt = function(val) {
    return {
      ToBe: (val2) => {
        if(val === val2){
          return true;
        }else{
          throw new Error("Not Equal");
        }
      },
      NotToBe: (val2) => {
        if(val !== val2){
          return true;
        }else{
          throw new Error("Equal");
        }
      }
    }
}

// ToBe
func = () => execpt(1).ToBe(1);
console.log(func());

// NotToBe
func = () => execpt(1).NotToBe(2);
console.log(func());
