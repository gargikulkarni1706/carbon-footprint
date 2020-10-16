class Form {

    constructor() {
        this.title = createElement('h3');
        this.input = createInput("");
        this.text = createElement('h1', "Please enter your name.");
        this.button1 = createButton('Submit');
        this.button2 = createButton('Calculate my footprint');
        this.greeting = createElement('h2');
        this.q1 = createElement('h3', "How many kilometres do you drive your car on a weekday?");
        this.radio1 = createRadio();
        this.radio1.option('Less than 30 kilometres');
        this.radio1.option('More than 30 kilometres');
        this.radio1.option('More than 60 kilometres');
        this.q2 = createElement('h3', "How many kilometres do you drive your car on a weekend?");
        this.radio2 = createRadio();
        this.radio2.option('Less than 40 kilometres');
        this.radio2.option('More than 40 kilometres');
        this.radio2.option('More than 80 kilometres');
        this.q3 = createElement('h3', "How many vehicles does your family own?");
        this.radio3 = createRadio();
        this.radio3.option('0');
        this.radio3.option('1-3');
        this.radio3.option('More than 3');
        this.q4 = createElement('h3', "What kind of fuel do your vehicles run on?");
        this.radio4 = createRadio();
        this.radio4.option('Petrol');
        this.radio4.option('Diesel');
        this.radio4.option('CNG');
        this.radio4.option('Biodiesel');
        this.radio4.option('Electricity');
        this.radio4.option('Other');
        this.q5 = createElement('h3', "Do you carpool often?");
        this.radio = createRadio();
        this.radio.option('No');
        this.radio.option('Yes');
        this.q6 = createElement('h3', "Does your house have a coal furnace? If yes, how often do you use it?");
        this.radio6 = createRadio();
        this.radio6.option('No');
        this.radio6.option('Yes. Use is less than an hour');
        this.radio6.option('Yes. Use is more than an hour');
        this.q7 = createElement('h3', "Do you use your vehicle to travel to destinations that are less than 3 kilometres away?");
        this.radio7 = createRadio();
        this.radio7.option('Yes');
        this.radio7.option('No');
        this.q8 = createElement('h3', "Do you burn your waste?");
        this.radio8 = createRadio();
        this.radio8.option('Yes');
        this.radio8.option('No');
        this.q9 = createElement('h3', "Do you recycle waste?");
        this.radio9 = createRadio();
        this.radio9.option('Yes');
        this.radio9.option('No');
        this.q10 = createElement('h3', "Do you donate funds to environment protection organisatio");
        this.radio10 = createRadio();
        this.radio10.option('Yes');
        this.radio10.option('No');
        this.q11 = createElement('h3', "Approximately how many trees do you plant every year?");
        this.radio11 = createRadio();
        this.radio11.option('Less than 10');
        this.radio11.option('More than 10');
        this.q12 = createElement('h3', "Approxiamtely how much is your monthly cooking gas bill?");
        this.radio12 = createRadio();
        this.radio12.option('Less than $50');
        this.radio12.option('More than $50');
        this.q13 = createElement('h3', "What efforts do you take to save energy?");
        this.inputq13 = createInput("");
        this.q14 = createElement('h3', "Would you term yourself as environment friendly? Why?");
        this.inputq14 = createInput("");
        this.q15 = createElement('h3', "What would you do to reduce global warming and excess carbon release?");
        this.inputq15 = createInput("");
        this.reset = createButton('Reset')
    }


    display() {
       this.title.html("CARBON FOOTPRINT CALCULATOR - Know your contribution");
       this.title.position(displayWidth - 60, 20);

       this.text.position(displayWidth - 30, displayHeight - 10);
       this.input.position(displayWidth - 30, displayHeight + 10);
       this.button1.position(displayWidth + 15, displayHeight + 20)

       this.greeting.position(displayWidth - 10, displayHeight)

       /* this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });*/

    }
}