
//ورود کاربر 
function Login()

{
    $.ajax({

        type:"json",
        method:"POST",
        url:"https://194.60.210.57/rest/login/api/1",
        data:{email:"", password:""},

        // data:{username:"", password:""},

        success: function(response) {

            alert(response);
            $("body").append(response);
        },

        error: function(response) {
            alert("Error: " + response);
        },

        StatusCode: {
            404 :function(response) {
                alert("صفحه مورد نظر یافت نشد" + response);
            },

            500 : function(response) {
                alert("خطای سرور" + response);
            }
        }
    })
}

// فرم ثبت نام 

function Register()
{
    $.ajax({
        type:"json",
        method:"POST",
        url:"htpps://194.60.23.10/rest/api/12",
        data : {
            getusername : "khp",
            getpassword: "$%hg&^GH",
            getTel:"0912874387",
            getNationalCode:"1812873",
            getCity:"Tehran",
            getPostCode : "1439849880",
            getbirthDate: "1377/19/10",
            getAddress: "Tehran-5sadslkdflkdf",
            getPhonenumber:"021-8877276",
            getIdNumber:"098120349",
        },

        success :function(response) {
            alert("ثبت نام شما با موفقیت انجام شد" + response);
            $("body").append(response);
        }, 

        error : function(response) {
            alert("ثبت نام شما با خطا مواجه شد!" + response);
        },

        StatusCode : {
            404: function(response) {
                alert("صفحه مورد نظر یافت نشد" + response);
            },

            500 : function(response) {
                alert("خطای سرور " + response);
            }
        }

    })
    
}