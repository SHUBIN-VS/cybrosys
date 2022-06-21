$(() =>{

    $.validator.addMethod("onlyLetters",function(value,element){
    return /^[A-Za-z\s]+$/.test(value);
    },"name contain only letters");

    $.validator.addMethod("checkEmail",function(value,element){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(value);
    },"invalid email format");


    $.validator.addMethod("strong",function(value,element){
        return /^[A-Za-z0-9\d=!#\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value) && /\W|_/g.test(value);
    },"Password Must contain at least one number and one uppercase and lowercase letter and special characters and at least 8 or more characters.");

   
    $('#toggle1').on('click', function(){
        var passInput=$("#pass");
        if(passInput.attr('type')==='password')
          {
            passInput.attr('type','text');
        }else{
           passInput.attr('type','password');
        }
    });
    

    function checkage(){
        var dob = $("#dateofbirth").val();
        dobyear = new Date(dob).getFullYear();
        nowyear = new Date().getFullYear();
        var ag = nowyear - dobyear;
        return ag
    }

    $('#dateofbirth').change(function(){
        $("#howold").val(checkage());
    });

    $('.con').validate({
        rules:{
            name:{
                required:true,
                minlength:3,
                onlyLetters:true
            },
            email:{
                required:true,
                email:true,
                checkEmail:true
            },
            address:{
                required:true,
                minlength:15
            },
            dob:{
                required:true
            },
            age:{
                required:true
            },
            pass1:{
                required:true,
                minlength:8,
                strong:true
            },
            pass2:{
                required:true,
                minlength:8,
                equalTo:"#pass"
            }
        },
        messages:{
            name:{required:"please enter your name!!!"},
            email:{required:"please enter your email!!!!"},
            address:{required:"please enter your address!!!!"},
            dob:{required:"select your date of birth!!!"},
            age:{required:"select dob for calculating age!!!!"},
            pass1:{required:"please enter your password!!"},
            pass2:{required:"please confirm your password!!!"}
        },
        errorElement: "div", // default is 'label'
        errorPlacement: function(error, element) {
            if(element.attr('name')=="pass1")
            {
            error.insertAfter($(".fa-solid"));
            }
            else{
            error.insertAfter(element);}
        },
        submitHandler:() => {
            var dob = $("#dateofbirth").val();
            dobdate = new Date(dob);
            nowdate = new Date();
            var ag = nowyear - dobyear;
            if(nowdate < dobdate){
                alert("your not eligible for open this cybrosys website!!##@")
            }else{
            window.location="https://www.cybrosys.com/";
        }
    }
    });
   

});


           