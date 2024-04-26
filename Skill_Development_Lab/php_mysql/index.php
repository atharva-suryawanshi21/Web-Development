<!DOCTYPE html>
<html>

<head>
  <title>Complaint Management</title>
</head>

<body>
  <h1>Current Database</h1>
  <table>
    <thead>
      <tr>
        <th>ID &nbsp;</th>
        <th>First Name&nbsp;&nbsp;</th>
        <th>Last Name&nbsp;&nbsp;</th>
        <th>Complaint&nbsp;&nbsp;</th>
      </tr>
    </thead>
    <tbody>

      <?php
      include 'dbcon.php';

      $query = "select * from `complaints`";
      $result = mysqli_query($connection, $query);
      if (!$result)
        die('Query error');
      else {
        while ($row = mysqli_fetch_assoc($result)) {
      ?>
          <tr>
            <td><?php echo $row['id'] ?></td>
            <td><?php echo $row['first_name'] ?></td>
            <td><?php echo $row['last_name'] ?></td>
            <td><?php echo $row['complaint'] ?></td>
          </tr>
      <?php
        }
      }
      ?>

    </tbody>
  </table>





  <h1>Insert Complaint</h1>
  <form action="insert.php" method="post">
    <div>
      <label for="first_name">First Name: </label>
      <input type="text" name="first_name" required />
    </div>
    <br />
    <div>
      <label for="last_name">Last Name: </label>
      <input type="text" name="last_name" required />
    </div>
    <br />
    <div>
      <label for="complaint">Complaint: </label>
      <input type="text" name="complaint" required />
    </div>
    <br />
    <button type="submit">Submit</button>
  </form>
</body>

</html>