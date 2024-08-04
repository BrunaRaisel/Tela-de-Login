var senha = "abacate";

function login(a,b)
{
    if(a==b)
        {
            alert("Acesso permitido")
        }
    else
        {
            alert("Senha incorreta");
        }
}

    function botao()
    {
        
        entrada = document.getElementById("pass").value;
        login(senha,entrada);
    }
