let userName = prompt('What is your name?');
alert(`Oh! Hello ${userName}!`);

const startGame = () => {
  let userPlay = confirm(`${userName}, do you want to go on an adventure?`);
  playGame(userPlay);
};
const playGame = (choice) => {
  if (choice) {
    alert('Ok! Lets find our way around a new school in a faraway land!');
    chooseHall();
  } else {
    alert("Okay, I guess you'd rather get lost on your first day of school.");
  }
};

const chooseHall = () => {
  let hallChoice = prompt(
    'There are two hallways in front of you. One goes to the LEFT, and the other goes to the RIGHT. Which one do you take?'
  );
  if (hallChoice === 'LEFT') {
    alert(`You just found the Library. Let's check out a book`);
    enterLibrary();
  } else if (hallChoice === 'RIGHT') {
    alert(`This leads to the cafeteria. Let's grab a snack`);
    enterCafeteria();
  } else {
    alert(
      `You chose to get back to the starting point. Having second thoughts? That's not allowed here. Let's try one of the other options.`
    );
    chooseHall();
  }
};

const enterLibrary = () => {
  let readSomething = prompt(
    `Ah! Look at that, we have a bookworm. They have ROMANCE and MYSTERY books available. Which type of book do you want to read?`
  );
  if (readSomething === 'ROMANCE') {
    alert(
      `You picked ${readSomething} and found a lunch coupon for the school's cafeteria! Maybe it's time to buy something to eat! Do you want to use the coupon?`
    );
    enterCafeteria();
  } else {
    alert(
      `You picked ${readSomething}. Oh no! Half of the pages are torn off and the librarian just passed by and saw you with it and is charging YOU for it :(.`
    );
    payFee();
  }
};

const enterCafeteria = () => {
  let grabSnack = prompt(
    `Good choice! now we can try out if the food is any good in this school. You have to pick between: PIZZA, CHEESEBURGER, and CHICKEN NUGGETS.`
  );
  if (grabSnack === `PIZZA`) {
    alert(
      `Yum! This ${grabSnack} definitely hit the spot. Now that we've eaten, let's continue exploring the place.`
    );
    enterYard();
  } else if (grabSnack === `CHEESEBURGER`) {
    alert(
      `This ${grabSnack} is discusting! The Cheese looks like it's growing something! Gross! We need to get out of here. Let's find the yard.`
    );
    enterYard();
  } else if (grabSnack === `CHICKEN NUGGETS`) {
    alert(
      `Turns out that some of the chicken had Salmonella and you got horribly sick! Tough luck!`
    );
  } else {
    alert(
      `This isn't a part of the menu options for today. Try again, or check the menu another day.`
    );
    enterCafeteria();
  }
};

const payFee = () => {
  let payMethod = prompt(
    `The total book price is $20.00. But due to some weird school library policy, if you pay with CASH, you get a 50% discount from the book's price. If you pay with card, you must pay the full price. How do you wish to pay? CASH or CARD?`
  );
  if (payMethod === `CASH`) {
    let fullPrice = 20;
    // if (fullPrice === 20) {
    //   discountPrice = fullPrice - fullPrice * 0.5;
    //   return discountPrice;
    // }
    alert(
      `Since you chose to pay with ${payMethod}, now you only have to pay a total of $${
        fullPrice - 10
      }.`
    );
  } else if (payMethod === `CARD`) {
    let fullPrice = 20;
    alert(
      `Since you chose to pay with ${payMethod}, you'll have to pay the full price of $${fullPrice}.`
    );
  }
};

const enterYard = () => {
  let yardActivity = prompt(
    `You finally made it to the yard! It looks like there are lots of activities going on here. Choose if you want to PLAY A SPORT, STUDY or PRACTICE ACTING.`
  );
  if (yardActivity === `PLAY A SPORT`) {
    alert(
      `You chose to play Soccer but the team is really bad and you ended up with a broken leg! Ouch!`
    );
  } else if (yardActivity === `STUDY`) {
    alert(
      `You sat down against a tree to study for one of your classes, but the soccer team kicked the ball in your direction, and hit you in the face!!`
    );
  } else if (yardActivity === `PRACTICE ACTING`) {
    alert(
      `You found a group of students practicing for the play: Sweeney Todd! Since you're new, they let you join, but they make you eat a disgusting pie!`
    );
  }
};

startGame();
