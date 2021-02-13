

//sendregister sendrequest function
async function register(Lname,Fname,Email,NationalID,password)
{
    let result = await sendRequest("OCS/1/rest/Account/get_account_info","POST",{

        Lname:Lname,
        Fname:Fname,
        Email:Email,
        NationalID:NationalID,
        password:password

    });

}


async function sendRequest(url,type,data,callback){

    return new Promise((resolve,reject) =>{

            //api url

            const apiUrl = "https://172.16.0.24:8243";
            $.ajax({
                url: apiUrl + url,
                type: type,
                data: type == "GET" ? data : JSON.stringify(data),
                headers: {
                    "Bearer 7ffed1a2-77ae-3f61-89f7-1e749d6e6758":localStorage.getItem("Bearer 7ffed1a2-77ae-3f61-89f7-1e749d6e6758"),
                    "Content-Type":"application/x-wwwform-urlencoded",
                    "Content-Length":333
                },

                dataType: "json",
                success: function(data,status) {
                    resolve(data);
                },

                error: function(xhr, textStatus, errorMessage)
                {
                    console.log(xhr);
                    resolve(xhr.responseJSON);
                },

                statusCode: {
                    404:"صفحه مورد نظر یافت نشد",
                    500:"خطای سرور",
                }
            });

    });
}