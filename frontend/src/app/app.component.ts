import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from "./components/navabar/navabar.component";
declare var VANTA: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavabarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('vantaContainer', { static: true }) vantaContainer!: ElementRef;
  private vantaEffect: any;

  ngOnInit(): void {
    const checkAndStart = () => {
      if (typeof VANTA !== 'undefined' && VANTA.BIRDS) {
        this.vantaEffect = VANTA.BIRDS({
          el: this.vantaContainer.nativeElement,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          birdSize: 1.70,
          separation: 61.00,
          alignment: 22.00,
          cohesion: 28.00,
          // backgroundColor: 0x0fdfea,
          // color1: 0x1e1e2f,
          // color2: 0xffffff
          backgroundColor: 0x1e1e1e,
          color1: 0xf39c12,
          color2: 0xecf0f1
        });
      } else {
        setTimeout(checkAndStart, 100);
      }
    };

    checkAndStart();
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}