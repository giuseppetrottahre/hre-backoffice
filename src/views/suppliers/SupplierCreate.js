import React from 'react';
import {
  Create,
  TextInput,
  FileInput,
  required,FileField,SelectInput
} from 'react-admin';
import { RaBox,CompactForm } from 'ra-compact-ui';
import { provinciecitta,provincie,provinciecittacap,toChoices, tipologialocation,categoriafornitore } from '../../utils/constants';
import { useFormState } from 'react-final-form';
import Typography from '@material-ui/core/Typography';

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
          choices={getKey() ? toChoices(provinciecitta[getKey()]) : []}
          {...props}
      />
  );
};


const CapInput = props => {
const { values } = useFormState();
function getKey(){
  if (values.provincia!==null && values.provincia!==undefined &&
      values.citta!==null && values.citta !==undefined) {
      let result=values.provincia.concat(values.citta);
      return result.replaceAll(" ","").replaceAll("-","").replaceAll("'","").replaceAll("/","")
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


export const SupplierCreate= (props) => (
<Create {...props}>
 <CompactForm layoutComponents={[RaBox]}> 
  <Typography variant="h6"  style={{textDecoration: 'underline',display:"flex", justifyContent:"center", marginTop:"15px",marginBottom:"15px"}}> Nuovo Fornitore </Typography>
  <RaBox display="flex" flexDirection="row" justifyContent="space-evenly">
  <RaBox display="flex" flexDirection="column" justifyContent="space-between">
  <TextInput source="nome" label= 'Nome'  />
  <SelectInput source="provincia" label='Provincia' choices={toChoices(provincie)} />
  <TextInput source="azienda" label= 'Azienda' />
   </RaBox>
   <RaBox display="flex" flexDirection="column" justifyContent="space-between">
   <TextInput source="cognome" label= 'Cognome' />
   <CittaInput source="citta" label= 'Città' />
  <SelectInput source="categoriafornitore"  label= 'Categoria fornitore' choices={categoriafornitore} />
 </RaBox>
 <RaBox display="flex" flexDirection="column" justifyContent="space-between">
 <TextInput source="email" label='Email' validate={[required()]}/>
  <TextInput source="cap" label= 'CAP' />
  <SelectInput source="tipologialocation"  label= 'Tipologia location' choices={tipologialocation} />
  </RaBox>
  <RaBox display="flex" justifyContent="space-around" flexDirection="column">
  <FileInput source="filepresentazione" label="File presentazione" accept="application/pdf" maxSize={3000000} placeholder={<p>Seleziona o trascina qui un file</p>} multiple ={false}>
    <FileField source="src" title="title" />
  </FileInput>  
  </RaBox>
  </RaBox> 
  </CompactForm>
</Create>
);