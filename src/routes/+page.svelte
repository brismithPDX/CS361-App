<script>
    import {PUBLIC_TITLE} from '$env/static/public';
    export let form;
</script>
<head>
    <title>
        {PUBLIC_TITLE}
    </title>

    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/auth.css" rel="stylesheet">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>

<body>
    <div id="body" class="active">
    <div class="wrapper">
        <div class="auth-content">
            <div class="card">
                <div class="card-body text-center">
                    <h6 class="mb-4 text-muted">Login</h6>
                    <form method="POST">
                        <div class="mb-3 text-start">
                            <label for="email" class="form-label">Email adress</label>
                            <input name="email" type="email" class="form-control" placeholder="Enter Email">
                        </div>
                        <div class="mb-3 text-start">
                            <label for="password" class="form-label">Password</label>
                            <input name= "password" type="password" class="form-control" placeholder="Password" required>
                        </div>
                        <div class="mb-3 text-start">
                            <div class="form-check">
                              <input class="form-check-input" name="remember" type="checkbox" value="" id="check1">
                              <label class="form-check-label" for="check1">
                                Remember me on this device
                              </label>
                            </div>
                            <div class="text-center">
                                {#if form?.incorrect}
                                    <p class="error">wrong password</p>
                                {/if}

                                <style>
                                    .error {
                                        color: red;
                                    }
                                </style>
                            </div>
                        </div>
                        <button class="btn btn-primary shadow-2 mb-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
</body>
