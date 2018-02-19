<?

$type = $_GET["type"];
$file = fopen("test.txt", "w");
fwrite($file, "test");
fclose($file);

?>