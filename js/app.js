
(function() {

    // check fields and hide the submits

    document.addEventListener('DOMContentLoaded', function() {

        const display = new Display();
        display.checkFields();
        display.hideSubmit();
    })

    // add customer on submit
    document.getElementById('customer-form').addEventListener('submit', function(event) {

        event.preventDefault();


        const name = this.querySelector('.name');
        const course = this.querySelector('.course');
        const author = this.querySelector('.author');
        
        const customer = new Customer(name.value, course.value, author.value);
        // console.log(customer);
        const display = new Display();

        display.feedback(customer);
        display.clearFields();
        

    })


    // display 
    function Display() {
        this.name = document.getElementById('name');
        this.course = document.getElementById('course');
        this.author= document.getElementById('author');
        this.customers = document.querySelector('.customer-list');
    }

    // check fields

    Display.prototype.checkFields = function() {
      //  console.log(this);
        this.name.addEventListener('blur', this.validateField);
        this.course.addEventListener('blur', this.validateField);
        this.author.addEventListener('blur', this.validateField);
    }

    // validate each field

    Display.prototype.validateField = function() {
       // console.log(this);
       if(this.value === '') {
        this.classList.remove('complete');
        this.classList.add('fail');
       } else {
        this.classList.remove('fail');
        this.classList.add('complete');

       }

       const complete = document.querySelectorAll('.complete');
       // console.log(complete.length);

       if(complete.length === 3) {
           document.querySelector('.submitBtn').disabled = false;
           
       } else {
           document.querySelector('.submitBtn').disabled = true;
       }

    };

    // disable submit button
    Display.prototype.hideSubmit = function() {

        const button = document.querySelector('.submitBtn');

        button.disabled = true;
    };

    // show loading and feedback

    Display.prototype.feedback = function(customer) {

        const feedback = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedback.classList.add('showItem', 'alert', 'alert-success');
        loading.classList.add('showItem');

        const self = this;
        self.hideSubmit();

        setTimeout(function() {

            feedback.classList.remove('showItem', 'alert', 'alert-success');
            loading.classList.remove('showItem');
            self.addCustomer(customer);
        }, 4000)

    }

    Display.prototype.addCustomer = function(customer) {
        console.log(customer);
    }

    // clear fields

    Display.prototype.clearFields = function() {

        // console.log(this);
        this.name.value = '';
        this.course.value = '';
        this.author.value = '';

      
        this.name.classList.remove('complete', 'fail');
        this.course.classList.remove('complete', 'fail');
        this.author.classList.remove('complete', 'fail');
        
    
    }


    // customer constructor function

    function Customer(name, course, author) {

        this.name = name;
        this.course = course;
        this.author = author;
    }

})();
