function validate(){
    var errorMessage = "";

                if (document.getElementById('name').value === "") {
                    errorMessage = "Please enter your name !!";
                    return false;
                } else if (document.getElementById('date').value === "") {
                    errorMessage = "Please enter your Date of birth !!";
                    return false;
                } else if (document.getElementById('age').value === "") {
                    errorMessage = "Please enter your age !!";
                    return false;
                } else if (document.getElementById('address').value === "") {
                    errorMessage = "Please enter your address !!";
                    return false;
                } else if (!document.querySelector('input[name="gender"]:checked')) {
                    errorMessage = "Please select your gender !!";
                    return false;
                } else if (!document.querySelector('input[name="Hobbies"]:checked')) {
                    errorMessage = "Please select your hobbies !!";
                    return false;
                } else if (document.getElementById('photo').files.length === 0) {
                    errorMessage = "Please attach your photo !!";
                    return false;
                } else {
                    return true;
                }

                document.getElementById('error').innerHTML = errorMessage;
            }
