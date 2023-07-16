<script>
    import {PUBLIC_TITLE} from '$env/static/public';
    export let data;

    function Request_Results() {
          document.getElementById('IO_box').innerText=JSON.stringify(data.post, null, 2)
     }
    
    function Clear_Results() {
          document.getElementById('IO_box').innerText="Results will be displayed here."
     } 

    function Undo_Results(){
        if(document.getElementById('IO_box').innerText=="Results will be displayed here."){
            Request_Results()
        }else{
            document.getElementById('IO_box').innerText="Results will be displayed here."
        }
    }

    function logout(){
        document.getElementById('logout_form').submit();
    }

</script>
<head>
    <title>
        {PUBLIC_TITLE + " - Dashboard"}
    </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="assets/vendor/fontawesome/css/fontawesome.min.css" rel="stylesheet">
    <link href="assets/vendor/fontawesome/css/solid.min.css" rel="stylesheet">
    <link href="assets/vendor/fontawesome/css/brands.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/master.css" rel="stylesheet">
    <link href="assets/vendor/flagiconcss/css/flag-icon.min.css" rel="stylesheet">
</head>

<body>
    <div class="wrapper">
        <nav id="sidebar" class="active">
            <div class="sidebar-header">

            </div>
            <ul class="list-unstyled components text-secondary">
                <li>
                    <a href="/dashboard" title="Return to the application dashboard"><i class="fas fa-home"></i> Dashboard</a>
                </li>
                
                <li>
                    <a href="#authmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down" title="show all application Authentication tools"><i class="fas fa-user-shield"></i> Authentication</a>
                    <ul class="collapse list-unstyled" id="authmenu">
                        <li>
                            <a href="/" on:click={logout} title="Logout from the app and return to the login page"><i class="fas fa-lock"></i> Login</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#helpmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down" title="show all application help tools"><i class="fas fa-book"></i> Help</a>
                    <ul class="collapse list-unstyled" id="helpmenu">
                        <li>
                            <a href="https://github.com/brismithPDX/CS361-App" title="Go to project github for full documenation"><i class="fab fa-github"></i> Documentation</a>
                        </li>
                    </ul>
                </li>
                <li hidden>
                    <a href="#pagesmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down"><i class="fas fa-copy"></i> Pages</a>
                    <ul class="collapse list-unstyled" id="pagesmenu">
                        <li>
                            <a href="404.html"><i class="fas fa-info-circle"></i> 404 Error page</a>
                        </li>
                        <li>
                            <a href="500.html"><i class="fas fa-info-circle"></i> 500 Error page</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="body" class="active">
            <!-- navbar navigation component -->
            <nav class="navbar navbar-expand-lg navbar-white bg-white">
                <button type="button" id="sidebarCollapse" class="btn btn-light">
                    <i class="fas fa-bars"></i><span></span>
                </button>

            </nav>
            <!-- end of navbar navigation -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 page-header">
                            <div class="page-pretitle">API Overview</div>
                            <h2 class="page-title">Application Interface Dashboard</h2>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-3">
                            <div class="card">
                                <div class="card-header">Request Options</div>
                                    <div class="card-body text-left">
                                        <h5 class="card-title">Controls</h5>
                                        <div class="text-left"><button type="button" class="btn btn-primary mb-1" on:click={Request_Results} title="Will ask the server for your users configured and requested data">Request</button></div>
                                        <div class="text-left"><button type="button" class="btn btn-primary mb-1" on:click={Undo_Results} title="Will undo the last operation affecting the results field">Undo</button></div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-9">
                            <div class="card">
                                <div class="card-header">Request Results</div>
                                <div class="card-body">
                                    <div id="IO_box" class="form-control input-lg mb-1 text-secondary" style="height:250px;"><pre id=json>Results will be displayed here.</pre></div>
                                    <div class="text-right"><button type="button" class="btn btn-primary mb-1" on:click={Clear_Results} title="Will remove your custom results from the results box above">Clear Request Results</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <form method="POST" id="logout_form" hidden></form>
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/script.js"></script>
    <script src=" https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js "></script>
</body>

