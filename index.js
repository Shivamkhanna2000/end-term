function frmData()
{
    
    var country=document.getElementById("cname").value;
    var sDate=document.getElementById("sdate").value;
    var eDate=document.getElementById("edate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);

            var length=res.length;
            var index=length-1;

            var c=res[index].Confirmed;
            var a=res[index].Active;
            var d=res[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("res").style.display="block";

            res.forEach((resp) =>{
                console.log(resp);
                var node1 = document.createElement("DIV");
                var textnode1 = document.createTextNode(`       confirmed cases: ${resp.Confirmed}       `);
                var textnode2 = document.createTextNode(`       active cases: ${resp.Active}       `);
                var textnode3 = document.createTextNode(`       death cases: ${resp.Deaths}       `);
                node1.appendChild(textnode1);
                node1.appendChild(textnode2);
                node1.appendChild(textnode3);
                document.getElementById("cas").appendChild(node1).style.color = "white";
            })

            
        })


    }
}