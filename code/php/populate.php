<?php

mysql_connect('127.0.0.1', 'root');
mysql_select_db('node');

for ($i = 0; $i < 10000000; $i++) {
	$b = $i % 1000;
	mysql_query("INSERT INTO count_test SET b=$b, c=ROUND(RAND()*10), d=MD5($i)");
}
