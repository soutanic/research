//ログイン
function login() {
    var mode = 'login'
    document.body.innerHTML = '';
    document.write('<div align="center">');
    document.write('<html lang="ja">');
    document.write('<head>');
    document.write('<title>研究所 ログイン</title>')
    document.write('<style>');
    document.write('body {background-color:#ffc68e}');
    document.write('button.btn-solid {');
    document.write('color: #fff;');
    document.write('border-top: 4px solid #48ecc4;');
    document.write('border-right: 4px solid #0a5f4a;');
    document.write('border-bottom: 4px solid #0f745b;');
    document.write('border-left: 4px solid #8cf9de;');
    document.write('border-radius: 0;');
    document.write('background: #11a37f;');
    document.write('}');
    document.write('</style>');
    document.write('</head>');
    document.write('<body>');
    document.write('<h1>sota005研究所</h1>');
    document.write('<h2>ログインコードを入力してください<h2>');
    document.write('<input type="text" style="width: 300px; height: 30px;" placeholder="ログインコードを入力" id="login_code"></input>');
    document.write('<button onclick="composite()" style="width: 100px; height: 35px;" class="btn btn-solid"><span>ログイン</span></button>');
    document.write('</div>');
    document.write('<a href="https://soutanic.github.io/home/"><div style="position: fixed; bottom: 0; right: 0;">sota005について</div></a>');
    document.write('</body>');
    document.write('</html>');
}
function home(text) {
    mode = 'home';
    document.body.innerHTML = '';
    document.write('<html lang="ja">')
    document.write('<title>'+mode+'</title>')
    document.write('<style>')
    document.write('body {background-color:#ffc68e}');
    document.write('</style>')
    document.write('<body>')
    document.write('<button onclick="login()">戻る</button>');
    document.write(text);
    document.write('</body>')
    document.write('</html>')
}
//復号化
function composite() {
    mode = 'composite';
    var login_code = document.getElementById('login_code').value;
    if (login_code == ''){
        alert('ログインを入力してください');
    }else{
        var user_input_composite = plaintext;
        var key_composite = login_code;
        var result = '';
        for (var i = 0; i<user_input_composite.length; i++){
            var process=user_input_composite[i];
            var user_index = alphabet.indexOf(process)+1;
            if (key_composite.length-1<i){
                var key_composite_index = alphabet.indexOf(key_composite[i%key_composite.length])+1;
            }else{
                key_composite_index = alphabet.indexOf(key_composite[i])+1;
            }
            user_index-=key_composite_index;
            if (user_index<=0){
                result += alphabet[alphabet.length+user_index-1];
            }else{
                result += alphabet[user_index-1];
            }
        }
        home(result);

    }
}
console.log('hello')
