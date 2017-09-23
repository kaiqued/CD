document.addEventListener("DOMContentLoaded", function() {
	var modal = document.getElementById('myModal');
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	var img2 = document.getElementById('myImg2');
	var img3 = document.getElementById('myImg3');
	var span = document.getElementsByClassName("close")[0];
	
	if(img){
		img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}	
	if(img2){
		img2.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}
	if(img3){
		img3.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}
	span.addEventListener("click", function() { 
		modal.style.display = "none";
	});
});
