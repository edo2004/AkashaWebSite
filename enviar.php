<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if($name === '' || $mail=== '' || $phone=== '' || $message=== ''){
    echo json_encode('error');
}else{
    echo json_encode('Correcto: <br>Usuario:'.$name.'<br>Pass:'.$mail);

    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/html; charset=utf-8";

    $messageFinal = "<html>".
    "<head>    
    
      <style type='text/css'>
        /* Take care of image borders and formatting, client hacks */
        img { max-width: 600px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
        a img { border: none; }
        table { border-collapse: collapse !important;}
        #outlook a { padding:0; }
        .ReadMsgBody { width: 100%; }
        .ExternalClass { width: 100%; }
        .backgroundTable { margin: 0 auto; padding: 0; width: 100% !important; }
        table td { border-collapse: collapse; }
        .ExternalClass * { line-height: 115%; }
        .container-for-gmail-android { min-width: 600px; }
    
    
        /* General styling */
        * {
          font-family: Helvetica, Arial, sans-serif;
        }
    
        body {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100% !important;
          margin: 0 !important;
          height: 100%;
          color: #676767;
        }
    
        td {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 2vh;
          color: #777777;
          text-align: center;
          line-height: 3vh;
        }
    
        a {
          color: #ff6f6f;
          font-weight: bold;
          text-decoration: none !important;
        }
    
        .pull-left {
          text-align: left;
        }
    
        .pull-right {
          text-align: right;
        }
    
        .header-lg {
          font-size: 4vh;
          font-weight: 700;
          line-height: normal;
          padding: 3vh 0 0;
          color: #4d4d4d;
        }
    
        .content-padding {
          padding: 5vh 0 6vh;
        }
        .free-text {
          width: 100% !important;
          padding: 2vh 3vh 0px;
        }
    
        .contact {
            height: 2vh;
          font-size: 2vh;
        }
        .button {
          padding: 2vh 0 0;
        }
    
        .mini-block-container {
          padding: 3vh 5vh;
          width: 50vh;
        }
    
        .mini-block {
          background-color: #ffffff;
          width: 48vh;
          border: 1px solid #cccccc;
          border-radius: 1vh;
          padding: 4vh 7vh;
          filter: drop-shadow(1vh 1vh 0.4vh rgba(0, 0, 0, 0.3));
          -webkit-filter: drop-shadow(1vh 1vh 0.4vh rgba(0, 0, 0, 0.3));
        }
    
        .user-img img {
          width: 20vh;
          padding: 2vh;
          filter: drop-shadow(1vh 1vh 0.4vh rgba(55, 55, 180,0.5));
          -webkit-filter: drop-shadow(1vh 1vh 0.4vh rgba(55, 55, 180,0.5));
        }
    
        .user-img {
          text-align: center;
          color: #ff6f6f;
          font-weight: 700;
        }
    
        .user-msg {
          padding-top: 10px;
          font-size: 2vh;
          text-align: center;
          font-style: italic;
        }
    
      </style>
    
      <style type='text/css' media='screen'>
        @import url(http://fonts.googleapis.com/css?family=Oxygen:400,700);
      </style>
    
      <style type='text/css' media='screen'>
        @media screen {
          /* Thanks Outlook 2013! */
          * {
            font-family: 'Oxygen', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
          }
        }
      </style>
    
      <style type='text/css' media='only screen and (max-width: 480px)'>
        /* Mobile styles */
        @media only screen and (max-width: 480px) {
    
          table[class*='container-for-gmail-android'] {
            min-width: 290px !important;
            width: 100% !important;
          }
    
          table[class='w320'] {
            width: 320px !important;
          }
    
          td[class='header-lg'] {
            font-size: 24px !important;
            padding-bottom: 5px !important;
          }
    
          td[class='content-padding'] {
            padding: 5px 0 30px !important;
          }
    
          td[class='button'] {
            padding: 5px !important;
          }
    
          td[class*='free-text'] {
            padding: 10px 18px 30px !important;
          }
    
          td[class='mini-block-container'] {
            padding: 8px 20px !important;
            width: 280px !important;
          }
    
          td[class='mini-block'] {
            padding: 20px !important;
          }
    
          td[class='user-img'] {
            display: block !important;
            text-align: center !important;
            width: 100% !important;
            padding-bottom: 10px;
          }
    
          td[class='user-msg'] {
            display: block !important;
            padding-bottom: 20px;
          }
        }
      </style>
    </head>".
    "<body bgcolor='#f7f7f7'>".
    "<table align='center' cellpadding='0' cellspacing='0' class='container-for-gmail-android' width='100%'>
      <tr>
        <td align='center' valign='top' width='100%' style='background-color: #f7f7f7;' class='content-padding'>
          <center>
            <table cellspacing='0' cellpadding='0' width='40%' class='w320'>
              <tr>
                <td class='header-lg'>
                  Has recibido un mensaje nuevo
                </td>
              </tr>
              <tr>
                <td class='free-text'>".
                  "<span><a href=''>" . $name ."</a></span> quiere mas detalles acerca de tus servicios".
                "</td>
              </tr>
              <tr>
                <td class='mini-block-container'>
                  <table cellspacing='0' cellpadding='0' width='100%'  style='border-collapse:separate !important;'>
                    <tr>
                      <td class='mini-block'>
                        <table cellpadding='0' cellspacing='0' width='100%'>
                          <tr>
                            <td>
                              <table cellspacing='0' cellpadding='0' width='100%'>
                                <tr>
                                  <td class='user-img'>
                                    <a href='demo.akashastudio.tv'><img class='user-img' src='https://i.pinimg.com/originals/b4/63/b8/b463b8646748001d049ccf53efab27e2.jpg' alt='user img' /></a>".
                                    "<br /><a href=''>" . $name ."</a>".
                                  "</td>
                                </tr>
                                <tr>
                                  <td class='user-msg'>" . $message . "</td>".
                                "</tr>
                                <tr class='contact'>
                                    <td class='button'>".'Tel: ' .$phone."</td>".
                                "</tr>
                                <tr>
                                    <td class='button'>". 'Email: '. $mail . "</td>".
                                "</tr>
                              </table>
                            </td>
                          </tr>  
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </center>
        </td>
      </tr>
    </table>
    </body>".
    "</html>";

    $para = 'edoleddemo@gmail.com';
    $asunto = 'Solicitud de servicios';

    mail($para, $asunto, $messageFinal, $header);

}

?>