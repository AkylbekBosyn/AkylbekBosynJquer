function registration()
	{

		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;
		var cpwd= document.getElementById("t5").value;

		if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{
               alert('Thank You for Login');
		}
	}
	$(document).ready(function() {
	  let $pw = $('#t4')
	  let $t = $('#toggle')

	  function setOriginalState() {
	    $pw.attr('type', 'password')
	    $t.text('Show')
	  }

	  $t.on('click', () => {
	    const isPw = $pw.attr('type') === 'password'

	    if (isPw) {
	      $pw.attr('type', 'text')
	      $t.text('Hide')

	    } else {
	      setOriginalState()
	    }
	  })
	})

	$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});
function scrollToTop() {
            $(window).scrollTop(0);
        }
				$(document).ready(function(){
    $("button").click(function(){
        var imageUrl = "7YKUD.jpg";
        $(".box").css("background-image", "url(" + imageUrl + ")");
    });
});
