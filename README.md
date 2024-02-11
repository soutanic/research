<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>研究所 ログイン</title>
    <style>
        body {
            background-color:#ffc68e;
        }
        button.btn-solid {
            color: #fff;
            border-top: 4px solid #48ecc4;
            border-right: 4px solid #0a5f4a;
            border-bottom: 4px solid #0f745b;
            border-left: 4px solid #8cf9de;
            border-radius: 0;
            background: #11a37f;
        }
    </style>
</head>
<body>
    <div align="center">
        <h1>sota005研究所</h1>
        <h2>ログインコードを入力してください</h2>
        <input type="text" style="width: 300px; height: 30px;" placeholder="ログインコードを入力" id="login_code"></input>
        <button onclick="composite()" style="width: 100px; height: 35px;" class="btn btn-solid"><span>ログイン</span></button>
    </div>
    <a href="https://soutanic.github.io/home/">
        <div style="position: fixed; bottom: 0; right: 0;">sota005について</div>
    </a>
    <script src="research.js"></script>
    <script src="alphabet.js"></script>
    <script src="research_letter.js"></script>
</body>
</html>
