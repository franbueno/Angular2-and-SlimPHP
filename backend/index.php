<?php
require 'vendor/autoload.php';

$app = new Slim\App();

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

//API call
$app->get('/users', 'getUsers');

$app->run();

//Select All
function getUsers() {
    try {
        $db = getConnection();
        $stmt = $db->query(
            'select *, GROUP_CONCAT(t.name) as teamsuser 
            from users u 
            LEFT JOIN teams_users tu ON tu.user_id = u.id
            LEFT JOIN teams t ON t.id = tu.team_id 
            GROUP BY u.id');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}

//Connection Database
function getConnection() {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "root";
    $dbname = "angular2_phpslim";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}
