$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let answers = [$("input#person1").val(), person2Input, animalInput, exclamationInput, verbInput, nounInput]
    let storyAns = [$(".person1"), $(".person2"), $(".animal"), $(".exclamation"), $(".verb"), $(".noun")]
    let loopNums = 0;
    answers.forEach(function(answer) {
      $(storyAns[loopNums]).text(answer);
      loopNums += 1;
    });

    // for (let index = 0; index <= answers.length-1; index++) {
    //   $('#story').append(answer[index]);
    // }

    // $(".person1").text(answer);
    // $(".person2").text(answer);
    // $(".animal").text(answer);
    // $(".exclamation").text(answer);
    // $(".verb").text(answer);
    // $(".noun").text(answer);
    
  

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    
    });
    $("#story").show();

}); 