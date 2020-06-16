<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" />
  <title>Poker</title>
</head>
<body>

  <div class='div_players'>
    
    <div class="div_player">
      <p id="player1">Player 1</p>
      <div class="container_card">
        <div class="div_card"><img id="cp11" class="card card_player" src="images/card_back.jpg" alt=""></div>
        <div class="div_card"><img id="cp12" class="card card_player" src="images/card_back.jpg" alt=""></div>
      </div>
    </div>

    <div class="button_result">
      <div>
          <button id="button" class="button"> Next turn !</button>
      </div>
      <div>
        <h2 id="stage">Stage.</h2>
        <p id="resultat">You should play.</p>
      </div>
          
    </div>
    <div class="div_player">
      <p id="player2">Player 2</p>
      <div class="container_card">
        <div class="div_card"><img id="cp21" class="card card_player" src="images/card_back.jpg" alt=""></div>
        <div class="div_card"><img id="cp22" class="card card_player" src="images/card_back.jpg" alt=""></div>
      </div>
    </div>
    
  </div>
  <div class= "common_cards">
    <div class="container_card">
        <div class="div_card"><img id="cc1" class="card card_flop" src="images/card_back.jpg" alt=""></div>
        <div class="div_card"><img id="cc2" class="card card_flop" src="images/card_back.jpg" alt=""></div>
        <div class="div_card"><img id="cc3" class="card card_flop" src="images/card_back.jpg" alt=""></div>
        <div class="div_card"><img id="cc4" class="card card_turn" src="images/card_back.jpg" alt=""></div>
        <div class="div_card"><img id="cc5" class="card card_river" src="images/card_back.jpg" alt=""></div>
    </div>
  </div>

    <script type="module" src="js/script.js"></script>
</body>
</html>