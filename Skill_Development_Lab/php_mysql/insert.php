<html>

<head>
    <title>insertion</title>
</head>

<body>
    <h1>This is insertion page</h1>
    <h2>This shows that </h2>
    <?php
    include 'dbcon.php';

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $complaint = $_POST['complaint'];

    $query = "insert into `complaints`(`first_name`, `last_name`, `complaint`) values ('$first_name', '$last_name','$complaint')";

    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Query Failed');
    }
    echo "<h2>Query successfully applied</h2>";
    // echo "<script>window.location.href = 'index.php';</script>";
    echo "<a href='index.php'> click here for main page</a>";
    ?>
</body>

</html>