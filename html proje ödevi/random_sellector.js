function chooseRandomImage() {
    const images = [
      'places/Athens.jpg',
      'places/Berlin.jpg',
      'places/Chichago.jpg',
      'places/Copenhagen.jpg',
      'places/Dubrovnik.jpg',
      'places/KualaLumpur.jpg',
      'places/istanbul.jpg',
      'places/moskov.jpg',

  
    ];

    const links = [
      'Athens.html',
      '35.html',
      'copenhagenchicago.html',
      'copenhagenchicago2.html',
      'Dubrovnik.html',
      '99.html',
      'https://tr.wikipedia.org/wiki/İstanbul',
      'https://tr.wikipedia.org/wiki/Moskova',
      
    ];

    const names =[
      'Athens',
      'Berlin',
      'Chichago',
      'Cophenhagen',
      'Dubrovnik',
      'Kualalumpur',
      'İstanbul',
      'Moskov',
    ];
  
    const randomIndex = Math.floor(Math.random() * images.length);
  
    const imageElement = document.getElementById('random-image');
    imageElement.src = images[randomIndex];


    const imageHref = document.getElementById('image-href');
    imageHref.href = links[randomIndex]; 

    const imageP = document.getElementById('image-p');
    imageP.innerHTML = names[randomIndex]; 

    const phref = document.getElementById('p-href');
    phref.href = links[randomIndex];

  }


