function generateCatGif() {
    // List of cat GIF URLs
    let catGifs = [
    'https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1',
    'https://media1.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=6c09b952r74oz6863i0fimqzlzjt32t23ct7trhu3m5qtk00&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/VbnUQpnihPSIgIXuZv/200w.gif?cid=6c09b952r74oz6863i0fimqzlzjt32t23ct7trhu3m5qtk00&ep=v1_gifs_search&rid=200w.gif&ct=g',
    'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w.gif?cid=6c09b952vg974h6lfgzsuptyi9h0buv4izi6x329aky846yb&ep=v1_gifs_search&rid=200w.gif&ct=g',
    'https://media1.tenor.com/m/CNI1fSM1XSoAAAAC/shocked-surprised.gif',
    'https://media1.giphy.com/media/yFQ0ywscgobJK/200w.gif?cid=6c09b952r74oz6863i0fimqzlzjt32t23ct7trhu3m5qtk00&ep=v1_gifs_search&rid=200w.gif&ct=g',
    'https://31.media.tumblr.com/01005f7fa8b54c2a1b0eef5ba9d44e16/tumblr_myl0misl141s199fdo1_500.gif',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1bP-_mCRueATeKeU4vxPxHlEtftR_gMOVtovHZWRglgqBy6A_PIV_HIXpjtoANZlWeUOYKOtSLY396-PQzGtBHc0fn5ruCpPcoVQgibNkI0jgSu98THAMNDEHwYmdXkYjdUlmC7AhhhU/s320/box.gif',
    'https://blog.alleninteractions.com/hs-fs/hubfs/7_humilation.gif?width=356&height=200&name=7_humilation.gif',
    'https://media.giphy.com/media/6VoDJzfRjJNbG/giphy.gif',
    'https://media1.giphy.com/media/H4DjXQXamtTiIuCcRU/200.gif?cid=6c09b952vg974h6lfgzsuptyi9h0buv4izi6x329aky846yb&ep=v1_gifs_search&rid=200.gif&ct=g',
    'https://24.media.tumblr.com/tumblr_m9wj5guXGp1rfcxtdo1_500.gif',
    'https://www.icegif.com/wp-content/uploads/2024/01/icegif-1088.gif',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifdb.com%2Fcute-cat&psig=AOvVaw013I1y9V0LDGaY4oHdojP1&ust=1712948052157000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqGAoTCJj1gfPquoUDFQAAAAAdAAAAABDKAQ'
    ];
  
    let randomCatGif = catGifs[Math.floor(Math.random() * catGifs.length)];
  

    let catGifImg = document.createElement('img');
    catGifImg.src = randomCatGif;
    catGifImg.alt = 'Random Cat GIF';
  

    let catGifContainer = document.getElementById('catGifContainer');
    catGifContainer.innerHTML = '';
    catGifContainer.appendChild(catGifImg);
  
    let catName = document.getElementById('catName').value;
    if (catName) {
      let message = document.createElement('p');
      message.textContent = `Here's a picture of ${catName}!`;
      catGifContainer.appendChild(message);
    }
  }
  