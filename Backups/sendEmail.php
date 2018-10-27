<?php
    if(isset($_POST['#buttonSubmit'])) {
        $msg = 'Name: ' .$_POST['name'] .'\n'
            .'Email: ' .$_POST['email'] .'\n'
            .'Message: ' .$_POST['message'];
        mail('ryanliu393@gmail.com', 'Vei-journey contact', $msg);
    } else{
        
    }
?>