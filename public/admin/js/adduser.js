$(document).ready(function(){
    $('.file_select').click(function() {
  $('#imgInp').click();
});

 imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    uploadedAvatar.src = URL.createObjectURL(file)
  }
}
});
// validation
$(document).ready(function(){
  $('.adduservalidation').click(function() {
    if($("#formValidationName").val()){
      $(".name_validation").hide();
    }else{
      $(".name_validation").show();
      return false
    }
    if($("#formValidationLast").val()){
      $(".lname_validation").hide();
    }else{
      $(".lname_validation").show();
      return false
    }
    if($("#formValidationFather").val()){
      $(".fathername_validation").hide();
    }else{
      $(".fathername_validation").show();
      return false
    }
    var email = $("#formValidationEmail").val();
    var txt = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!txt.test(email)){
      $(".email_validation").show();
      return false
    }else{
     
      $(".email_validation").hide();
    }
    if($("#formValidationConfirmPass").val()){
      $(".password_validation").hide();
    }else{
      $(".password_validation").show();
      return false
    }
    if($("#formValidationdate").val()){
      $(".dob_validation").hide();
    }else{
      $(".dob_validation").show();
      return false
    }
    var mobileNum = $("#formValidationPhone").val();
var validateMobNum= /^\d*(?:\.\d{1,2})?$/;

    if(validateMobNum.test(mobileNum ) && mobileNum.length == 10){
      $(".phone_validation").hide();
    }else{
      $(".phone_validation").show();
      return false
    }
    if($("#formValidationSelect2").val()){
      $(".usertype_validation").hide();
    }else{
      $(".usertype_validation").show();
      return false
    }
    if($("#formValidationCity").val()){
      $(".city_validation").hide();
    }else{
      $(".city_validation").show();
      return false
    }
    if($("#formValidationState").val()){
      $(".state_validation").hide();
    }else{
      $(".state_validation").show();
      return false
    }
    if($("#formValidationGender").val()){
      $(".gender_validation").hide();
    }else{
      $(".gender_validation").show();
      return false
    }
    if($("#formValidationPermission").val()){
      $(".role_validation").hide();
    }else{
      $(".role_validation").show();
      return false
    }
    if($("#formValidationAddress").val()){
      $(".address_validation").hide();
    }else{
      $(".address_validation").show();
      return false
    }
    var fileupload=$("#imgInp").val();
    if(fileupload){
     
    }else{
      warning();
      return false;
    }
    // alert("success");
    addusersubmit();
});
$(".red").hide();
});



  // $(document).ready(function() {
      function addusersubmit(){
  //   $('#formValidationExam').submit(function(e) {
  //       e.preventDefault();

       
$(".submit_button").attr('disabled','disabled');
$(".submit_button").html('<span class="spinner-border spinner_in me-1" role="status" aria-hidden="true"></span> Loading...');
var addexpenses = {
  email: $("#formValidationEmail").val(),
};
$.ajax({
  type: "get",
  url: "/api/Emailchecking",
  data: addexpenses,
  success: function(data) {
      console.log(data);

      if (data.length) {
        warning_email();
        $(".submit_button").removeAttr('disabled');
        $(".submit_button").html('Submit');
        $(".email_validation").show();
      } else {
        //  error();
        $(".email_validation").hide();
        adduser();
      }
  },
});

return false
  }
// });
// });

function adduser(){
  var date=$("#formValidationdate").val();
  Date1=date.split("/");
  datefor=Date1[2]+'/'+Date1[1]+'/'+Date1[0];
          $("#formValidationdate").val(datefor);

  let formData = new FormData($('#formValidationExam')[0]);
console.log(formData);
  $.ajax({
    type: "post",
    url: "/api/adduser",
    data: formData,
    processData: false,
    contentType: false,
    cache: false,
    dataType: "JSON",
    enctype: "multipart/form-data",
    success: function(data) {
      $(".submit_button").removeAttr('disabled');
      $(".submit_button").html('Submit');
        if (data && data.id) {
          success();
          window.location.href = "/userlist";
          
        } else {
           error();
        }

    }


});
}

function success(){
    
       
  Swal.fire({
    title: 'Success',
    text: 'You clicked the button!',
    icon: 'success',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });


}

function error(){

Swal.fire({
  title: 'Error!',
  text: ' You clicked the button!',
  icon: 'error',
  customClass: {
    confirmButton: 'btn btn-primary'
  },
  buttonsStyling: false
});

}

function warning(){
 
  Swal.fire({
    title: 'Warning!',
    text: 'Image not add',
    icon: 'warning',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
  }

  
function warning_email(){
 
  Swal.fire({
    title: 'Warning!',
    text: 'Email already exist',
    icon: 'warning',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
  }

  (function () {
    // Flat Picker
    // --------------------------------------------------------------------
    const flatpickrDateadd = document.querySelector('#formValidationdate'),
    flatpickrDateedit = document.querySelector('.flatpickr_edit');
   
     
    
    // Date
    if (flatpickrDateadd) {
      flatpickrDateadd.flatpickr({
        monthSelectorType: 'static',
        dateFormat: 'd/m/Y',
        maxDate: new Date(),
      });
    }
    if (flatpickrDateedit) {
      flatpickrDateedit.flatpickr({
        monthSelectorType: 'static',
        dateFormat: 'd-m-Y',
        maxDate: new Date(),
      });
    }
  
    })();