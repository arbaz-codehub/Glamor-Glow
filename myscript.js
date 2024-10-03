const acc_items = document.querySelectorAll(".acc-items"); 

acc_items.forEach(element => {
    const title = element.querySelector(".acc-title");
    const content = element.querySelector(".acc-content");
    
    title.addEventListener('click', () => {
        for (i = 0; i < acc_items.length; i++) {
            if (acc_items[i] != element){
                acc_items[i].classList.remove('active');
            }
            else {
                element.classList.toggle('active');
            }
        }
    })
});


function submitForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;

    var message = "First Name: " + firstName + "\n" +
                  "Last Name: " + lastName + "\n" +
                  "Email: " + email + "\n" +
                  "Country: " + country;

    alert(message);

    // you can reset the form after submission
    document.getElementById("subscribeForm").reset();
}