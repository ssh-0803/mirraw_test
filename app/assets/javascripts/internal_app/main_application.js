function handleEnterOnlyAlphabet(field, event){
    var charCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    var keyCode = event.keyCode;
    if (charCode == 13) {
        var i;
        for (i = 0; i < field.form.elements.length; i++)
          if (field == field.form.elements[i])
           break;
        i = (i + 1) % field.form.elements.length;
        field.form.elements[i].focus();
        return false;
    }
    else {
        if (keyCode >=37 &&  keyCode <= 40) {
            return true;
        }
        if (!((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 45 || charCode == 9 || charCode == 127 || charCode == 46 || charCode == 95 || charCode == 32 ))
            return false;
        else {
            return true;
        }
    }
}


function ValidateBookingEmail(object, index){
    email = object.value
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if (email== '')
   {
    return false;
   }
    if(reg.test(email) == false) {
        alert(hs_js_obj["invalid_email_address"]);
        $('#' + object.id).val('');
        return false;
    }
}
