function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var a = document.forms["myForm"]["dob"].value;
    var b = document.forms["myForm"]["college"].value;
    var c = document.forms["myForm"]["email"].value;
    if (x == "" || x == null || a == null || y == "" || y == null || b == "" || b == null || c == null || c=="" ) {
      alert("Enter all details");
      return false;
    }
    else{
      alert("Thankyou For Submitting!");
    }
    
  }
   


  console.log("It is working")