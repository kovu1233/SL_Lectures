
<!DOCTYPE html>
<html>
<head>
    <!--<script type="text/javascript" src="js/jquery.js"></script>-->
    <!--
        Customize this policy to fit your own app's needs. For more guidance, see:
            https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
        Some notes:
            * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
            * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
            * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                * Enable inline JS: add 'unsafe-inline' to default-src
        -->
    
    <!-- Required meta tags-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">

    <!-- Your app title -->
    <title>My App</title>

    <!-- This template defaults to the iOS CSS theme. To support both iOS and material design themes, see the Framework7 Tutorial at the link below:
        http://www.idangero.us/framework7/tutorials/maintain-both-ios-and-material-themes-in-single-app.html
     -->

    <link rel="stylesheet" href="css/framework7.ios.min.css">
    <link rel="stylesheet" href="css/framework7.ios.colors.min.css">

    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!-- Status bar overlay for full screen mode (PhoneGap) -->
    <div class="statusbar-overlay"></div>

    <!-- Panels overlay-->
    <div class="panel-overlay"></div>
    <!-- Left panel with reveal effect-->
    <div class="panel panel-left panel-reveal">
        <div class="content-block">
            <p>Not active yet...</p>
        </div>
    </div>

    <!-- Views -->
    <div class="views">
        <!-- Your main view, should have "view-main" class -->
        <div class="view view-main">
            <!-- Top Navbar-->
            <div class="navbar">
                <div class="navbar-inner">
                    <!-- We need cool sliding animation on title element, so we have additional "sliding" class -->
                    <div class="center sliding"><b>قسم الترجمة الإشارية</b></div>
                    <div class="right">
                        <!--
                          Right link contains only icon - additional "icon-only" class
                          Additional "open-panel" class tells app to open panel when we click on this link
                        -->
                        <a href="#" class="link icon-only open-panel"><i class="icon icon-bars"></i></a>
                    </div>
                </div>
            </div>
            <!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->
            <div class="pages navbar-through toolbar-through">
                <!-- Page, "data-page" contains page name -->
                <div data-page="index" class="page">
                    <!-- Scrollable page content -->
                    <div class="page-content" style="height: 80%;">
                        <div class="content-block" style="position: absolute; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                            <p>
                                <table align="center" border="0" style="background-color: #aaa; padding: 5%;" class="mkshdw"><tr>
                                    <td><b>Login:</b></td><td><input type="text" id="user" class="rndTxt"></td></tr><tr>
                                    <td><b>Password:</b></td><td><input type="password" id="pword" class="rndTxt"></td></tr><tr>
                                    <td colspan="2">&nbsp;</td></tr><tr>
                                    <td colspan="1" align="right" id="upSubmitted" onmousedown="loginUser();" class="button" style="background-color:#2979FF; color: #FFFFFF;">Login</td><td></td></tr>
                                </table>
                            
                            <!--<a href="https://www.speechtexter.com" onclick="javascript:startlisten();return false;" id="listen">► Start</a>-->

                            
                            
                            </p>
                            <!-- Link to another page -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Bottom Toolbar-->
            <div class="toolbar">
                <div class="toolbar-inner">
                    <!-- Toolbar links -->
                    <a href="#" class="link">Link 1</a>
                    <a href="#" class="link">Link 2</a>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="lib/framework7/js/framework7.min.js"></script>
    <script type="text/javascript" src="js/my-app.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    
</body>

</html>