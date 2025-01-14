(function() {
    
    var filename = 'https://tympanus.net/codrops/adpacks/demoad.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad4'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = 'https://penpot.app/plugins-contest?utm_source=Codrops&utm_medium=Twitter&utm_campaign=PluginsContest';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2024/11/penpot_demos.jpg';
            var cdaImgAlt = 'Penpot';
            var cdaText = "Penpot has launched its Plugin System! Enter the contest Nov 15-Dec 15 and win cash prizes!";
            break;
        case "ad2":
            var cdaLink = 'https://www.wix.com/studio/pantone-color-of-the-year-2025?utm_campaign=pa_media_buying_studio_brnd_12/24_codrops^demos&experiment_id=^brand^^pantone';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2024/12/Demos.png';
            var cdaImgAlt = 'Wix Studio';
            var cdaText = "The Pantone Color of the Year 2025 web design assets that get you ahead of 2025’s web design trends";
            break;
        case "ad3":
            var cdaLink = 'https://bit.ly/codrops-dora-3d';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2024/05/Dora_3D_demo.png';
            var cdaImgAlt = 'Dora';
            var cdaText = "Dora — Build sites with professional-grade animations and 3D interactions, zero code.";
            break;
        case "ad4":
            var cdaLink = 'https://bit.ly/codrops-diviai';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
            var cdaImgAlt = 'Divi AI';
            var cdaText = "Transform content, code, images, and websites on demand with DIVI AI.";
            break;
        default:
            var cdaLink = 'https://bit.ly/codrops-diviai';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
            var cdaImgAlt = 'Divi AI';
            var cdaText = "Transform content, code, images, and websites on demand with DIVI AI.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.style.display = 'none';
    cda.innerHTML = '<a href="'+cdaLink+'" class="carbon-img" target="_blank" rel="noopener"><img src="'+cdaImg+'" alt="'+cdaImgAlt+'" border="0" height="100" width="130"></a><a href="'+cdaLink+'" class="carbon-text" target="_blank" rel="noopener">'+cdaText+'</a><div class="cda-footer"><span class="cda-remove" id="cda-remove">Close</span></div>';
    document.getElementsByTagName('body')[0].appendChild(cda);

    setTimeout(function() {
        cda.style.display = 'block';
    }, 1000);

    document.getElementById('cda-remove').addEventListener('click', function(e) {
        cda.style.display = 'none';
        e.preventDefault();
    });
    
})();