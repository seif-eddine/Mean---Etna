<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "mean");

$result = $conn->query("SELECT ICAO, NA, LOGIN, TD, DATED, DATER, TTD, TDD, Application FROM Deployment");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ICAO":"'  . $rs["ICAO"] . '",';
    $outp .= '"LOGIN":"'   . $rs["LOGIN"]        . '",';
    $outp .= '"NA":"'   . $rs["NA"]        . '",';    
    $outp .= '"TD":"'   . $rs["TD"]        . '",';
    $outp .= '"DATED":"'   . $rs["DATED"]        . '",';
    $outp .= '"DATER":"'   . $rs["DATER"]        . '",';
    $outp .= '"Application":"'   . $rs["Application"]        . '",';
    $outp .= '"TTD":"'   . $rs["TTD"]        . '",';
    $outp .= '"TDD":"'. $rs["TDD"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
