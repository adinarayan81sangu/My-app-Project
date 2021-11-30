import { Component, OnInit } from '@angular/core';
import { CrouseldataService } from 'src/app/Services/crouseldata.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carousel1:any;
  constructor(private carosule:CrouseldataService) { }

  ngOnInit(): void {
    this.carosule.getCarouselData().subscribe((res)=>{
      this.carousel1=res;
      // console.log("tttttttttttttttttttttttt")
      console.log(this.carousel1);
    })
  }

}
