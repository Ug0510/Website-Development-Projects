let studentList = [];


//function to render the list
function renderList(){

    if(studentList.length == 0)
        return ;
    
    $('.student-list').html('');
        
    for(let entry of studentList)
    {
        const li = `<li>
    Roll no - <span id="Studentrollno">${entry.rollno}</span> ,<span id="studentName">${entry.name}</span>  has scored <span id="studentMarks">${entry.marks}</span>marks
    </li>`;
        $('.student-list').append(li);
    }   

}


//function to add student in list
function addStudent()
{
    const rollno = $('#rollno').val() ;
    const name = $('#name').val() ;
    const marks = $('#marks').val();

    $("#rollno").val('');
    $("#name").val('');
    $("#marks").val('');

    if(rollno === "" || name === "" || marks === "")
    {
        window.alert("Fill all fields");
        return;
    }
    const studentObj = {
        rollno,
        name,
        marks
    }
    studentList.push(studentObj);
    renderList();
}

//Event listener when button is pressed
$('#addBtn').on("click",function(){
    addStudent();
});