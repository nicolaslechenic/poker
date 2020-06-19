<?php require('header.php'); ?>

<script type="module" src="./../emailScript.js"></script>


<section id="email_section">
    <div id="email_input">
        <h2> Send us your email so we can keep in touch!</h2></br>
        <form action ="api.php" method="get">
            <label for="email">API response test:</label>
            <input type="submit" class='testAPIButton' value="Submit">
        </form>
        <br><br><br>
        <form action ="api.php" method="post">
            <label for="email">Add Email:</label>
            <input type="text" id="emailInput" class="emailInput" name="email">
            <input type="submit" class='addEmailButton' value="Submit">
        </form>
    </div>
</section>


<?php require('footer.php'); ?>
