let fetchdata = () =>
{
    let httpreq = new XMLHttpRequest();
    httpreq.open( "GET", "https://jsonplaceholder.typicode.com/users/" );
    httpreq.send();
    httpreq.onload = () =>
    {
        let res = JSON.parse( httpreq.responseText );
        console.log( res );
        localStorage.setItem( "users", JSON.stringify( res ) );
        displaydata();

    };

};
let displaydata = () =>
{
    let tbody = document.getElementById( "tbody" ) ;
    tbody.innerHTML = "";
    let storeduser = JSON.parse( localStorage.getItem( "users" ) );
    storeduser.map(
        ( user, index ) =>
        ( tbody?.innerHTML += `
             <tr>
             <td>${ index + 1 }</td>
             <td>${ user.name }</td>
             <td>${ user.username }</td>
             <td>${ user.email }</td>
             <td>${ user.phone }</td>
             <td>${ user.country }</td>

            `)

    );
};
fetchdata();

