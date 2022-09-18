import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SugMatbea } from 'src/app/models/sug-matbea.model';
import { Truma } from 'src/app/models/truma.model';
import { YeshutMedinitZara } from 'src/app/models/yeshut-medinit-zara.model';
import { TrumaService } from 'src/app/services/truma.service';

const YESHUT_MEDINIT_ZARA: YeshutMedinitZara[] = [
  { Id: 1, Shem: "מדינה זרה" },
  { Id: 2, Shem: "ארגון או חבר של גופים זרים" },
  { Id: 3, Shem: "רשות או נציגות שלמדינה זרה" }
];

const SUG_MATBEA: SugMatbea[] = [
  { Id: 1, ShemMatbea: "שקל חדש" },
  { Id: 2, ShemMatbea: "אירו" },
  { Id: 3, ShemMatbea: "דולר" }
];

@Component({
  selector: 'app-truma',
  templateUrl: './truma.component.html',
  styleUrls: ['./truma.component.css']
})
export class TrumaComponent implements OnInit {

  @Input() truma?: Truma;
  @Input() isEditState?: boolean;

  yeshuiot: YeshutMedinitZara[] = YESHUT_MEDINIT_ZARA;
  sugMatbea: SugMatbea[] = SUG_MATBEA;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private trumaService: TrumaService,
    private router: Router) 
    { }

  ngOnInit(): void {  
    let trumaId = this.truma?.id ?? -1;

    this.form = this.formBuilder.group({
      id: [trumaId],
      shemYeshutMedinitZara: [{value: '', disabled: !this.isEditState}, [Validators.required, Validators.pattern('^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$')]],
      schum:[{value: '', disabled: !this.isEditState}, [Validators.required]], //Validators.pattern('^[1-9]\d*(\.\d+)?$')
      sugYeshutMedinitZara:[{value: '', disabled: !this.isEditState}, Validators.required],
      yeud:[{value: '', disabled: !this.isEditState},Validators.required],
      tnaim:[{value: '', disabled: !this.isEditState}],
      sugMatbea:[{value: '', disabled: !this.isEditState}, Validators.required],
      shaarHamara:[{value: '', disabled: !this.isEditState}, Validators.required]
    });

    if(this.truma != null && this.truma.id != -1) {
      this.updateForm(this.truma);
    }
  }

  ngOnChanges(changes: any): void {

console.log('isEdit', this.isEditState);
console.log('changes', changes);

    if (this.isEditState) {
      this.form?.enable();
    } else {
      this.form?.disable();
    }
      
  }

  updateForm(truma: Truma) {
    this.form.patchValue({
      id: truma.id,
      shemYeshutMedinitZara: truma.shemYeshutMedinitZara,
      schum: truma.schum,
      sugYeshutMedinitZara: truma.sugYeshutMedinitZara ,
      yeud: truma.yeud,
      tnaim: truma.tnaim,
      sugMatbea: truma.sugMatbea,
      shaarHamara: truma.shaarHamara
    });
  }

  hasError(field: string, error: string) {
    return this.form.get(field)?.hasError(error);
  }

  resetForm() {
    this.form.reset({
      id: this.form.get('id')?.value
    });
  }
  
  submitTruma() {
    console.log(this.form.controls);
    let updatedTruma: Truma = new Truma(
      this.form.get('id')?.value,
      this.form.get('shemYeshutMedinitZara')?.value,
      this.form.get('schum')?.value,
      this.form.get('sugYeshutMedinitZara')?.value,
      this.form.get('yeud')?.value,
      this.form.get('tnaim')?.value,
      this.form.get('sugMatbea')?.value,
      this.form.get('shaarHamara')?.value
    );

      this.trumaService.upsertTruma(updatedTruma)
        .subscribe(
          data => {
            this.updateForm(data);
            console.log(data);

            this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
            this.router.navigate(['trumot']));
          }
        );
    
  }

}
