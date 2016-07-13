
<?php

require 'controller/practice.php';

$practice = new Controller_Practice();


$tpl = $practice->templates->loadTemplate('practice.mustache'); //$practice is a variable, templates is a property, loadtemplate is the function
$data = $practice->route();

echo $tpl->render($data);

