window.onload = main;

let g_SlideIndexArray = [0, 0, 0, 0]

function main()
{
	for (let i = 0; i < g_SlideIndexArray.length; i++)
	{
		let slides = GetSlide(i);
		let captions = document.getElementsByClassName("caption");

		captions[i].innerHTML = `1/${slides.length}`;
		slides[0].style.display = "block";
	}
}

function Redirect(url) {
	window.location(url)
}

function ImageCarouselPrevious(index, n) {
	g_SlideIndexArray[index] += n;
	ShowSlides(index);
}

function ImageCarouselNext(index, n) {
	g_SlideIndexArray[index] += n;
	ShowSlides(index);
	console.log(g_SlideIndexArray[index])
}

function GetSlide(index) {
	switch (index) {
		case 0: return document.getElementsByClassName("img-1");
		case 1: return document.getElementsByClassName("img-2");
		case 2: return document.getElementsByClassName("img-3");
		case 3: return document.getElementsByClassName("img-4");
	}
}

function ShowSlides(index) {
	let slides = GetSlide(index);
	let captions = document.getElementsByClassName("caption");

	if (g_SlideIndexArray[index] == slides.length)
	{
		g_SlideIndexArray[index] = 0;
	}
	else if (g_SlideIndexArray[index] < 0)
	{
		g_SlideIndexArray[index] = slides.length - 1;
	}

	for (let i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}

	slides[g_SlideIndexArray[index]].style.display = "block";
	captions[index].innerHTML = `${g_SlideIndexArray[index] + 1}/${slides.length}`;
}
