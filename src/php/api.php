
<?php 
  // gestion API
  header("Content-Type: application/json;charset=utf-8");
  $req_method = $_SERVER['REQUEST_METHOD'];
  $path = $_SERVER['PATH_INFO'];

  //GET
  if($path === "/api/email/get" && $req_method === "GET") {
    $response = "réponse API GET";
    echo json_encode($response);
  }

  //POST mail
  if($path === "/api/email/add" && $req_method === "POST") {
    $data = json_decode(file_get_contents('php://input'),true);

    //save Email to BDD
    /*
    $host = "localhost";
    $port = "5432";
    $dbname = "poker_bdd";
    $user = "poker_user";
    $password = "2013022015478369";
    $conn_string = `host={$host} port={$port} dbname={$dbname} user={$user} password={$password}`;
    $dbconn4 = pg_connect($conn_string);
    */

    //send Email to user

    


    echo(json_encode($data));
  }
 
 
?>