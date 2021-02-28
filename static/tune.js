
var students = [];

function myfunction() {

    var me = document.form1.Name.value;
    var email = document.form1.Email.value;
    var site = document.form1.Website.value;
    var link = document.form1.Imagelink.value;
    var gen = document.form1.gender.value;

    var student = {
        "me": me,
        "email": email,
        "site": site,
        "link": link,
        "gen": gen,
    };

    if (me.value == "") {
        window.alert("Please enter your name.");
        me.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (site.value == "") {
        window.alert("Please enter your Website.");
        site.focus();
        return false;
    }

    //if (!(gen[0].checked || gen[1].checked || gen[2].checked)) {
        //window.alert("Please select your gender. ");
        //return false;
    //}

    if (link.value == "") {
        alert("Please enter your Image link.");
        link.focus();
        return false;
    }
    students.push(student);

    return first();

}

function first() {

    var str = `<h1>Enrolled student</h1> <br>
      <table>
         <tr style="background-color: rgba(201, 124, 9, 0.932);">
            <th>Description</th>
            <th>Image</th>
        </tr>`;

    students.forEach(function (student) {
        str += `<tr>
        <td>
            ${student.me} <br>  ${student.gen} <br> ${student.email} <br>${student.site};
        </td>
        <td> ${student.link}
        </td>
    </tr>`;


        // student.me +"<br>" + student.gen +"<br>" + student.email +"<br>" + student.site;

    })
    str += "</table>";

    document.getElementById("table").innerHTML = str;
    document.form1.Name.value = '';
    document.form1.Email.value = '';
    document.form1.Website.value = '';
    document.form1.Imagelink.value = '';
    document.form1.gender.value = '';

}





