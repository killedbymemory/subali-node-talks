<?php

mysql_connect('127.0.0.1', 'root');
mysql_select_db('node');

$total = 0;

// count
$start = time();
$sql = 'select SQL_NO_CACHE count(*) from count_test where b > 0 and b < 999';
mysql_query($sql);
$end = time();

echo 'query: ' . $sql;
echo "\n";
$delta = $end - $start;
$total += $delta;
echo $delta . ' seconds';
echo "\n\n";


// fetch web page
$start = time();
$url = 'http://startupbali.tumblr.com/';
$curlHandle = curl_init();

curl_setopt_array($curlHandle, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true
));

$body = curl_exec($curlHandle);
curl_close($curlHandle);
$end = time();

echo 'curl ' . $url;
echo "\n";
$delta = $end - $start;
$total += $delta;
echo $delta . ' seconds';
echo "\n\n";

// total
echo 'total: ', $total . ' seconds';
echo "\n";
