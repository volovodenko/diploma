<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Вход в панель управления</title>

    <style>
        body, * {
            font-size: 100%;
        }

        #wrapper {
            width: 400px;
            margin: 0 auto;
        }

        h3 {
            text-align: center;
        }

        label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        button {
            padding: 5px 10px;
            outline: 0 !important;
            color: black;
        }


    </style>
</head>
<body>
<div id="wrapper">

    @if (isset($auth) && $auth === 'fail')
        <div>Пользователя с такими данными не существует</div>
    @endif

    <form method="post">
        {{ csrf_field() }}
        <h3>Вход в панель управления</h3>
        <label>E-mail или логин:<input name="userName" type='text'/></label>
        <label>Пароль:<input name="password" type='password'/></label>
        <button type="submit">Вход</button>
    </form>
</div>
</body>
</html>
