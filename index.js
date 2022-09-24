
        function logar(){

            var login = document.getElementById('username').value;
            var senha = document.getElementById('password').value;

            if(login == "guitv" && senha == "guitv"){
                alert('Sucesso');
                location.href = "home.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }