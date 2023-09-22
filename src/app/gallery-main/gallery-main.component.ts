import { Component, OnInit } from '@angular/core';

// Define a TypeScript interface for the image objects
interface ImageInfo {
  title: string;
  src: string;
  description: string;
}

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css'],
})
export class GalleryMainComponent implements OnInit {
  images: ImageInfo[] = [
    {
      title: 'Anko Chan',
      src: 'assets/gallery/anko-counter.jpg',
      description: 'Anko loves our homemade doggie cookies',
    },
    {
      title: 'Homemade Chai Mix',
      src: 'assets/gallery/chai-mix.jpg',
      description: 'Made with inspiration from our favorite Indian restaurant',
    },
    {
      title: 'Chicken Burrito',
      src: 'assets/store-photos/chicken-burrito.jpg',
      description:
        'Our flavorful chicken burrito has been here since the beginning',
    },
    {
      title: 'Tiramisu Tres Leches',
      src: 'assets/store-photos/tiramisu-2.jpg',
      description: 'One of our most unique desserts to date',
    },
    {
      title: 'Vegan Choco Chip Cookies',
      src: 'assets/store-photos/vegan-cookies.jpg',
      description: 'Simple but delicious cookies to heal your soul.',
    },
    {
      title: 'Vegan & No plastic success',
      src: 'assets/store-photos/vegan.jpg',
      description: 'We met our goal',
    },
    {
      title: 'Morning Waffles',
      src: 'assets/store-photos/waffles.jpg',
      description: 'A delicious way to start the day',
    },
    {
      title: 'Salmon Burrito',
      src: 'assets/store-photos/salmon-burrito.jpg',
      description: 'A special burrito made with Alaskan Salmon',
    },
    {
      title: 'Summer Drinks',
      src: 'assets/store-photos/drinks-lineup.jpg',
      description: 'Chill out with some cool drinks',
    },
    {
      title: 'Cake Platter',
      src: 'assets/store-photos/tres-lineup.jpg',
      description: 'Variety of our tres leches cake flavors',
    },
  ];

  currentImageIndex: number = 0;
  currentImage: ImageInfo = this.images[this.currentImageIndex];

  previousImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 4000);
  }
}
