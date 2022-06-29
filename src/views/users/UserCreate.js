import React from 'react';
import {
  Create,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  FileInput,
  FileField,
  DateInput,
  required,regex 
} from 'react-admin';

import { RaBox,CompactForm } from 'ra-compact-ui';
import Typography from '@material-ui/core/Typography';

import { toChoices,nazioni,genderItems,levels,eye_colors,hair_colors,provinciecittacap,provinciecitta,provincie,numero_scarpe,taglia_vestito,stato,valutazione } from '../../utils/constants';
import { useFormState } from 'react-final-form';

const CittaInput = props => {
  const { values } = useFormState();
  function getKey(){
  if (values.provincia!==null && values.provincia!==undefined) {
    let result=values.provincia.replaceAll(" ","").replaceAll("-","").replaceAll("'","").replaceAll("/","")
    return result
  }
  return undefined
}
  return (
      <SelectInput
          label={getKey()?"Città":"Selezionare prima la provincia"}  
          disabled={getKey()?false:true}  
          choices={getKey()? toChoices(provinciecitta[getKey()]) : []}
          {...props}
      />
  );
};


const CapInput = props => {
const { values } = useFormState();
function getKey(){
  if (values.provincia!==null && values.provincia!==undefined &&
      values.citta!==null && values.citta !==undefined) {
      let result=values.provincia.concat(values.citta).replaceAll(" ","").replaceAll("-","").replaceAll("'","").replaceAll("/","");
      return result;
    }
    return undefined
}
return (
    <SelectInput
        choices={getKey() ? toChoices(provinciecittacap[getKey()]) : []}
        {...props}
    />
  );
};

const validateZipCode =[required(), regex(/^\d{5}$/, 'Must be a valid Zip Code')];


export const UserCreate = (props) => (
  <Create {...props}>
   <CompactForm layoutComponents={[RaBox]} >
<RaBox display="block" >
    <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Informazioni di base </Typography>
        <RaBox display="flex" >
            <RaBox flex="0 0.3 33%" display="flex" flexDirection="column" justifyContent="space-between">
            <SelectInput source="stato"  label="Stato" choices={toChoices(stato)}/>
            <TextInput source="secondonome" label="Secondo Nome"/>
            <TextInput source="cellulare" label="Cellulare" validate={[required()]}/>
            <TextInput source="indirizzodomicilio" label="Indirizzo Domicilio" validate={[required()]}/>
            <TextInput source="note" label="Note"/>
            <TextInput source="fblink" label="Facebook Link"/>
            <SelectInput source="nazionedinascita"  label="Nazione di Nascita" choices={toChoices(nazioni)} validate={[required()]}/>
            </RaBox>
            <RaBox flex="0 0.3 33%" display="flex" flexDirection="column" justifyContent="space-between">
            <SelectInput source="valutazione"  label="Valutazione" choices={toChoices(valutazione)}/>
            <SelectInput source="genere"  label="Genere" choices={genderItems} validate={[required()]}/>
            <TextInput source="telefono" label="Telefono"/>
            <SelectInput source="provincia" label='Provincia' choices={toChoices(provincie)} validate={[required()]}/>
            <TextInput source="cap" label= 'C.A.P.' validate={validateZipCode}/>
            <TextInput source="instalink" label="Instagram Link"/>
            <TextInput source="provinciadinascita" label="Provincia di Nascita"validate={[required()]}/>
            </RaBox>
            <RaBox flex="0 0.3 33%" display="flex" flexDirection="column" justifyContent="space-between">
            <TextInput source="nome" label="Nome" validate={[required()]}/>
            <TextInput source="cognome" label="Cognome" validate={[required()]}/>
            <TextInput source="mail" label="Email" validate={[required()]}/>
            <TextInput source="codicefiscale" label="Codice Fiscale" validate={[required()]}/>
            <CittaInput source="citta"  validate={[required()]}/>
            <DateInput source="datadinascita" label="Data di Nascita" validate={[required()]}/>
            <TextInput source="cittadinascita" label="Città di Nascita" validate={[required()]}/>
            </RaBox>
        </RaBox>
        <Typography variant="h6" style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Dettagli personali </Typography>

<RaBox display="flex" >
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">
<TextInput source="titolodistudi" label='Titolo di studi' />
<TextInput source="istituto" label="Istituto"/>
</RaBox>
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">
<NumberInput source="annodiconseguimento" label="Anno di conseguimento" />
<NumberInput source="votazione" label="Votazione" />
</RaBox>  
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">
<TextInput source="notepersonali" label="Note" /> 
</RaBox>
</RaBox> 
<Typography variant="h6" style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Competenze linguistiche </Typography>
<RaBox display="flex" >
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">
<SelectInput source="inglese" label="Inglese" choices={levels} allowEmpty={false} validate={[required()]}/>
<SelectInput source="spagnola" label="Spagnola" choices={levels} allowEmpty={false}/>
</RaBox>
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">

<SelectInput source="francese" label="Francese" choices={levels} allowEmpty={false}/>
<TextInput source="altrelingue" label="Altre Lingue"/>
</RaBox>
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">

<SelectInput source="tedesca"  label="Tedesca" choices={levels} allowEmpty={false}/>

</RaBox>

</RaBox>
<Typography variant="h6" style={{ textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}>  Patenti e corsi </Typography>
<RaBox display="flex" >
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">
  <BooleanInput source="haccp" label="H.A.C.C.P."/>
<BooleanInput source="tesserinoaeroporto" label="Tesserino Aeroporto"/>
<BooleanInput source="automunito" label="Automunito"/>
</RaBox>
<RaBox flex="0 1 33%" display="flex" flexDirection="column" justifyContent="space-between">
<BooleanInput source="primosoccorso" label="Primo Soccorso"/>
<BooleanInput source="brevetto" label="brevetto"/>
<BooleanInput source="patenteauto" label="Patente Auto"/> 

</RaBox>

<RaBox flex="0 1 33%" display="flex" flexDirection="column" >
<BooleanInput source="antincendio" label="Antincendio"/>
<BooleanInput source="tesserinosicurezza" label="Tesserino Sicurezza"/>
</RaBox>
</RaBox>
<Typography variant="h6"style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> C.V / Photo </Typography>
<RaBox display="flex" flexDirection="column" justifyContent="space-between" >

<FileInput source="filenameinputcv" label="C.V. allegato" accept="application/pdf" maxSize={3000000} placeholder={<p>Seleziona o trascina qui un file</p>} multiple ={false} validate={[required()]}>
    <FileField source="src" title="title" />
</FileInput>

  <FileInput source="filenameinputprofiloimg" label="Foto Profilo" accept="image/*" maxSize={3000000} placeholder={<p>Seleziona o trascina qui un file</p>} multiple ={false}>
    <FileField source="src" title="title" />
</FileInput>

</RaBox>
</RaBox>
</CompactForm>

</Create>
);
