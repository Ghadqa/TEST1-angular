import { Component , OnInit } from '@angular/core';



@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dateInput = document.getElementById('myDateInput');

    // Check if dateInput is not null
    if (dateInput !== null) {
      // Attach event listener for changes
      dateInput.addEventListener('change', () => {
        // Retrieve the chosen date value
        const chosenDate = (dateInput as HTMLInputElement).value;

        // Do something with the chosen date value
        console.log(chosenDate);

        // You can perform any further actions with the chosen date here
      });
    }
  }
}