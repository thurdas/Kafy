<?php
/**
 * Created by TheWine
 * User: havlis
 * Date: 31.08.17
 * Time: 10:20
 */


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
    <meta charset="utf-8">
    <script type="text/javascript" src="./js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="./css/reset.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed" rel="stylesheet">
</head>
<body>
<section class="bg"></section>
<section id="login-page">
    <article>
        <form class="login-form" action="">
            <div class="container">
                <h1>Kafy</h1>
                <section class="form-wrap">
                <input type="text" placeholder="Username" name="username" required>
                <input type="password" placeholder="Password" name="password" required>
                <button id="submit-button" type="submit">Login</button>
                <button id="loading-button">
                    <i class="fa fa-circle-o-notch fa-spin"></i>Loading
                </button>
                    <section class="register-login">Dont have account ? <a href="#">Register here!</a></section>
                </section>

            </div>
        </form>
    </article>
</section>

<script type="text/javascript">
    //Replaces login button with loading button on submit
    window.addEventListener("submit", function(event){
        event.preventDefault();
        displayLoading();
    });

    function displayLoading() {
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("loading-button").style.display = "block";
    }
</script>
</body>
</html>