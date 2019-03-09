import React from 'react';
import PhotoGrid from './PhotoGrid.jsx';

class PhotoModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }
 
// Seed currently contains listingIds from 1-100 - make sure to use valid endpoint (e.g. "http://localhost:3000/rooms/3/").
  componentDidMount() { 
    let listingId = window.location.pathname.split('/')[2];
    this.setSizeByScreen();
    fetch (`http://localhost:3002/rooms/1/images`)
      .then(res => res.json())
      .then(images => this.setState({images}));
  };

  setSizeByScreen() {
    document.styleSheets[2].insertRule(
      `.img-grid {
        height: ${ screen.height * 0.4 }px;
      }`
    );
    document.styleSheets[2].insertRule(
      `@media screen and (min-width: 960px) {
        .img-grid {
          height: ${ screen.height * 0.5 }px;
        }
      }`, 1
    );
    document.styleSheets[2].insertRule(
      `.view-photo-btn {
        top: ${ screen.height * 0.4 + 16}px;
      }`, 2
    );
    document.styleSheets[2].insertRule(
      `@media screen and (min-width: 960px) {
        .view-photo-btn {
          top: ${screen.height * 0.5 + 16}px;
        }
      }`, 3
    );
  }

  selectActivePhoto() {
    let photos = document.querySelectorAll('.carousel-item'),
    thumbnails = document.querySelectorAll('.thumbnail');

    photos.forEach(photo => photo.classList.remove('active'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    const gridMap = {
      image1: 0,
      image2: 1,
      image3: 2,
      image4: 3,
      image5: 4
    }

    photos[gridMap[event.path[0].id]].classList.add('active');
    thumbnails[gridMap[event.path[0].id]].classList.add('active');
    document.querySelector('.view-photo-btn').click();
  }

  scrollToActive() {
    let activeThumb = document.querySelectorAll('.active')[1];
    activeThumb.scrollIntoView({behavior: "smooth", inline: "center"});
  }

  setCaption() {
    let activePhoto = document.querySelectorAll('.active')[1];
    let invisibleCaption = activePhoto.querySelector('.invisible-caption').innerText;
    let caption = document.querySelector('.img-caption');
    caption.innerText = invisibleCaption;
  }

  copyUrl() {
    let dummy = document.createElement('input'),
    text = window.location.href,
    modal = document.querySelector('.modal-body');
  
    modal.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    modal.removeChild(dummy);
    document.querySelector('.copy-link').innerHTML = '&nbsp;Link Copied';
  }

  hideFilmstrip() {
    const filmstrip = document.querySelector('.filmstrip'),
    hideBtn = document.querySelector('.hide-filmstrip-btn'),
    captionHide = document.querySelector('.caption-hide-wrapper');

    filmstrip.classList.toggle('hidden-filmstrip');
    captionHide.classList.toggle('caption-hide-hidden');
    if (hideBtn.innerHTML[0] === 'H') {
      hideBtn.innerHTML = 'Show photo list<i class="fas fa-sort-up"></i>';
    } else {
      hideBtn.innerHTML = 'Hide photo list<i class="fas fa-sort-down"></i>';
    }
  }
 
  renderImgGrid() {
    if (this.state.images) {
      return (<
        PhotoGrid 
        images={this.state.images} 
        selectActivePhoto={this.selectActivePhoto} 
        scrollToActive={this.scrollToActive} 
        setCaption={this.setCaption} 
        copyUrl={this.copyUrl}
        hideFilmstrip={this.hideFilmstrip}
      />)
    }
  };

  render() {
    return (
      <div>
        {this.renderImgGrid()}
      </div>
    )
  };
}

export default PhotoModule;