<?php

define("HOSTNAME", "localhost");
define("username", "root");
define("password", "");
define("database", "complaint_database");

$connection = mysqli_connect(HOSTNAME, username, password, database);
if (!$connection) {
    die("Database Connection Problem");
}
