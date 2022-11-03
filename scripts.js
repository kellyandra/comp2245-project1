/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    let email = document.querySelector('input[type="submit"]');
    let buttons= document.getElementsByClassName ('btn');
    let button = buttons[1];
    let message= document.getElementsByClassName('Message');

    button.addEventListener("click", function(event) {
        event.preventDefault();

        let text= email.innerHTML;

        if (validateEmail(text)) {
            message.innerHTML=`Thank you! Your email address ${email} has been added to our mailing list!`;
        } else {
           return false;
        }


    })

    


}
)

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
/*function mfunction(){
    message.innerHTML=`Thank you! Your email address ${email} has been added to our mailing list! `;
}
*/
