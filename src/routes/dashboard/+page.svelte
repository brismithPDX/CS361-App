<script>
    import {PUBLIC_TITLE} from '$env/static/public';

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
                    <a href="/dashboard"><i class="fas fa-home"></i> Dashboard</a>
                </li>
                
                <li>
                    <a href="#authmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle no-caret-down"><i class="fas fa-user-shield"></i> Authentication</a>
                    <ul class="collapse list-unstyled" id="authmenu">
                        <li>
                            <a href="/"><i class="fas fa-lock"></i> Login</a>
                        </li>
                    </ul>
                </li>
                <li>
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
                            <div class="page-pretitle">Overview</div>
                            <h2 class="page-title">Dashboard</h2>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-3">
                            <div class="card">
                                <div class="card-header">Options</div>
                                    <div class="card-body text-left">
                                        <h5 class="card-title">API Request Controls</h5>
                                        <div class="text-left"><button type="button" class="btn btn-primary mb-1" >Request</button></div>
                                        <div class="text-left"><button type="button" class="btn btn-primary mb-1" >Undo</button></div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-lg-9">
                            <div class="card">
                                <div class="card-header">Results</div>
                                <div class="card-body">
                                    <input type="text" style="height:250px" class="form-control input-lg mb-1" name="Results" disabled>
                                    <div class="text-right"><button type="button" class="btn btn-primary mb-1">Clear Request Results</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>

