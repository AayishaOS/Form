function validate(){
    var errorMessage = "";

                if (document.getElementById('name').value === "") {
                    errorMessage = "Please enter your name !!";
                } else if (document.getElementById('date').value === "") {
                    errorMessage = "Please enter your Date of birth !!";
                } else if (document.getElementById('age').value === "") {
                    errorMessage = "Please enter your age !!";
                } else if (document.getElementById('address').value === "") {
                    errorMessage = "Please enter your address !!";
                } else if (!document.querySelector('input[name="gender"]:checked')) {
                    errorMessage = "Please select your gender !!";
                } else if (!document.querySelector('input[name="Hobbies"]:checked')) {
                    errorMessage = "Please select your hobbies !!";
                } else if (document.getElementById('photo').files.length === 0) {
                    errorMessage = "Please attach your photo !!";
                } else {
                    document.getElementById('form1').submit();
                    return; // To prevent further execution
                }

                document.getElementById('error').innerHTML = errorMessage;
            }