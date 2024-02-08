import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor(private el: ElementRef) { }

  // @Input() appPhoneNumber: string = '';

  @HostListener('input', ['$event'])
  onInput(event: any) {
    // Get the input value
    let inputValue: string = event.target.value;

    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');

    // Format the phone number (e.g., (123) 456-7890)
    const formattedValue = this.formatPhoneNumber(numericValue);

    // Update the input value
    this.el.nativeElement.value = formattedValue;
  }

  private formatPhoneNumber(value: string): string {
    // Format the phone number based on your preference
    const areaCode = value.slice(0, 3);
    const middlePart = value.slice(3, 6);
    const lastPart = value.slice(6, 10);

    return `(${areaCode}) ${middlePart}-${lastPart}`;
  }
}
