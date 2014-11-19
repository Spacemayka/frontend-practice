
<?php

echo "Hello world!<br>";

require 'controller/practice.php';

$practice = new Controller_Practice();

$tpl = $practice->templates->loadTemplate('practice.mustache');
$data = $practice->route();

echo $tpl->render($data);
